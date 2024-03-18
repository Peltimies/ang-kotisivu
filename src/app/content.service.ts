import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Content } from './content';

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  apiurl = 'api/content';

  constructor(private http: HttpClient) {}

  /**
   * Get the content as an observable array of Content objects.
   *
   * @return {Observable<Content[]>} the content as an observable array of Content objects
   */
  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>(this.apiurl);
  }
}
