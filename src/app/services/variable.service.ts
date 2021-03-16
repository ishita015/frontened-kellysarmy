import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariableService {
  public logout = false; /*------Show logout button in dashboard page------*/
 	public login=true
  public user_type=null
  public actionType;
  constructor() {
  		if(localStorage.getItem('userId') != null){
 		  this.login= false;
 		  this.user_type=localStorage.getItem('user_type');
		 }else{
 		  this.login= true;
 		  this.user_type=null;

		 }
   }

}
