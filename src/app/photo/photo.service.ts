import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    private http: HttpClient,

  ) { }

  getPhotos(): Observable<any[]> {
    const apiUrl = environment.photosApiUrl
    return this.http.get<any[]>(apiUrl);
  }

  getPhotoById(id: any): Observable<any> {
    const apiUrl = environment.photosApiUrl
    return this.http.get<any>(`${apiUrl}/${id}`);
  }

  //get all photos
  getAllPhotos(): Observable<any[]> {
    const apiUrl = environment.photosApiUrl
    return this.http.get<any[]>(apiUrl);
  }

  //update photo here
  updatePhotodetails(updateData: any, photoId: number): Observable<any> {
    const apiUrl= environment.photosApiUrl
    const updateUrl = apiUrl + '/' + photoId;

    return this.http.put<any>(updateUrl, updateData);
  }
}
