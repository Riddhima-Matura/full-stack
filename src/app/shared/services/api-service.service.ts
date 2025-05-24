import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  baseUrl=''

  constructor(private http:HttpClient) { }

  get(url:string, params:any){
    return this.http.get(this.baseUrl+url, {params:params})
  }

  post(url:string, payload:any, params?:any){
    return this.http.post(this.baseUrl+url,payload,{params:params})
  }

  deleteService(url: string, params?: any) {
    return this.http.delete(this.baseUrl+url, { body: params })
  }


  updateService(url: string, payload: any, params?: any){
    return this.http.post<any>(this.baseUrl + url, payload, { params: params })
  }
}
