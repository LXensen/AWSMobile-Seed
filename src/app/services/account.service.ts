import { Injectable } from '@angular/core';
import { Auth, Logger } from 'aws-amplify';

const logger = new Logger('AccountService');

@Injectable()
export class AccountService {

  constructor() { }

  signin(username: string, 
        password: string){
    return Auth.signIn(username, password)
  }

  signout(){

  }

  signup(username: string, 
          password: string, 
          email: string){
    return Auth.signUp(username, password, email)
  }

  confirm(username: string, code: string) {
    return Auth.confirmSignUp(username, code)
  }
  
  resendCode(username: string){
    return Auth.resendSignUp(username)
  }
}
