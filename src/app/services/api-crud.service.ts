import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from "src/app/interfaces/postInterface.type";

@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient) { }
  getAll(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }
}
