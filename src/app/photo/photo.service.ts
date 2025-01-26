import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPhotoById(id: any): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  //get all photos
  getAllPhotos():Observable<any[]> {
    const getUrl = this.apiUrl;

    return this.http.get<any[]>(getUrl);
  }

  //update photo here
  updatePhotodetails(updateData: any, photoId: number): Observable<any>{
    const updateUrl = this.apiUrl + '/'+  photoId;

    return this.http.put<any>(updateUrl, updateData);
  }
}
