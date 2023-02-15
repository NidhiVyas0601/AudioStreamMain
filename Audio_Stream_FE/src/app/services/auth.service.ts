import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseUrl ='http://localhost:3600' ;
  public loginRoute = this.baseUrl + '/user/login';
  public registerRoute = this.baseUrl + '/user/create'
  public fetchAudio = this.baseUrl + '/audio/get';
  constructor(    private http: HttpClient,) { }

  login(body:any){
    return this.http
    .post(this.loginRoute, body)
}
register(body:any){
  return this.http
  .post(this.registerRoute, body)
}
fetchAudioList(){
  return this.http.get(this.fetchAudio)
}
}
