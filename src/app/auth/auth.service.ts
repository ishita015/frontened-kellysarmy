import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    const id = this.getUserId();
    let x = false;
    if(id){
        return true
    }
    return false
  }

  public getUserId(): string {
    return JSON.parse(localStorage.getItem('userId'));
  }
}
