import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioBoutonComponent } from './radio-bouton.component';

describe('RadioBoutonComponent', () => {
  let component: RadioBoutonComponent;
  let fixture: ComponentFixture<RadioBoutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioBoutonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RadioBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
