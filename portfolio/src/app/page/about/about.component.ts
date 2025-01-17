import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {NgClass, NgForOf} from "@angular/common";
import {EventItem} from "./event-item";
import {InfoService} from "../../service/info.service";
import {take} from "rxjs";
import {AboutCardComponent} from "../../component/about-card/about-card.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    TranslateModule,
    NgForOf,
    NgClass,
    AboutCardComponent
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  events: EventItem[] = [];

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef,
    private service: InfoService
  ) {
    this.getEvents();
  }

  getEvents(): void {
    this.service.getData()
      .pipe(take(1))
      .subscribe((data: EventItem[]) => {
        this.events = data;
        this.cdr.detectChanges();
        this.callbackFunc();
    });
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('window:scroll', ['$event'])
  onWindowEvent(event: Event): void {
    this.callbackFunc();
  }

  callbackFunc(): void {
    const items = this.elementRef.nativeElement.querySelectorAll('li');
    items.forEach((item: HTMLElement) => {
      if (this.isItemInView(item)) {
        this.renderer.addClass(item, 'show');
      }
    });
  }

  isItemInView(item: Element): boolean {
    const rect = item.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

}
