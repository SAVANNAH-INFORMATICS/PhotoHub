import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
 
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<any[]> {
    const apiUrl= environment.albumsApiUrl
    return this.http.get<any[]>(apiUrl);
  }

  getAlbumById(id: string | null): Observable<any> {
    const apiUrl= environment.albumsApiUrl
    return this.http.get<any>(`${apiUrl}/${id}`);
  }
}
