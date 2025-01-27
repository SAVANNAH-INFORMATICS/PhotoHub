import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    const apiUrl= environment.usersApiUrl
    return this.http.get<any[]>(apiUrl);
  }

  getUserById(id: string | null): Observable<any> {
    const apiUrl= environment.usersApiUrl
    return this.http.get<any>(`${apiUrl}/${id}`);
  }
}
