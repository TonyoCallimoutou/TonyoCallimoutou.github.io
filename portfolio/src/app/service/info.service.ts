import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EventItem} from "../page/about/event-item";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient) { }

  getData(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>('assets/data/infos.json');
  }
}
