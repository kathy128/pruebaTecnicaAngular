import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from "../interfaces/user.type";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticatedUser: User = {
    active: true,
    lastName: "hidalgo",
    secondLastName: "Corredor",
    createDate: new Date(),
    id: 1,
    secondName: "Nombre 2",
    firstName: "katherine"
  };

  constructor(private http: HttpClient) {
  }
  public getStatus():boolean{
    return this._authenticatedUser.active;
  };
  public getNames(names: {firstName?: boolean, secondName?: boolean, lastName?: boolean, secondLastName?: boolean}){
    // tslint:disable-next-line:prefer-const
    let output = [];
    if(names.firstName){
      output.push(AuthService.validateName(this._authenticatedUser.firstName));
    }
    if(names.secondName){
      output.push(AuthService.validateName(this._authenticatedUser.secondName));
    }
    if(names.lastName){
      output.push(AuthService.validateName(this._authenticatedUser.lastName));
    }
    if(names.secondLastName){
      output.push(AuthService.validateName(this._authenticatedUser.secondLastName));
    }
    return output.join(" ");
   
  }

  private static validateName(name: string){
    if(!name || name === "null" || name === "undefined"){
      return "";
    }
    return name;
  }
}
