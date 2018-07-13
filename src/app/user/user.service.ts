import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user.model';
import { Observable } from '../../../node_modules/rxjs';
import { RestResponse } from '../model/restResponse.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) { }

  public getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>("http://localhost:8080/getUsers");
  }

  public saveOrUpdate(user: UserModel): void{
     this.http.post<RestResponse>("http://localhost:8080/deleteUser",JSON.stringify(user));
  }
}
