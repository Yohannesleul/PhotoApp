import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor(
    private http:HttpClient
  ) {  }

  apiCall(){
     const headers = { 'Authorization': 'KziH4-pUz5p9TRGEDwfS4o8eoX3o3ERP30hm58sLcdI'}
     return this.http.get ('https://api.unsplash.com/photos/?client_id=KziH4-pUz5p9TRGEDwfS4o8eoX3o3ERP30hm58sLcdI&per_page=30&page=2');
    // return this.http.get ('https://api.unsplash.com/photos/?client_id=1a28e59e586593faf822eb102154d46e8f56c830d3e5d896a0293804233f991a&per_page=30&page=2');
    //return this.http.get ('https://jsonplaceholder.typicode.com/todos/1');
  
  }
}
