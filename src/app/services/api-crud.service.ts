import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from "src/app/interfaces/postInterface.type";

//import { ToastService } from 'src/app/services/api-crud.service';
@Injectable({
  providedIn: 'root'
})
export class ApiCrudService {
  apiUrl = 'http://localhost:3000/posts';
  dataTemp: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);
  //Crud methods
  constructor(private http: HttpClient) { }
    
    getAll(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
    }
  
    postPost(data: Post){
      return this.http.post<Post>(this.apiUrl,data);
    }
    deletePost(id: number){
      return this.http.delete<Post>(this.apiUrl+'/'+id);
    }
    putPost(data: Post, id: number){
      return this.http.put<Post>(this.apiUrl+'/'+id, data);
    }

}
