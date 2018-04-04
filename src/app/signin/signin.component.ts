import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';

export class LoginDetails {
  username: string;
  password: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  validationMessage: string;
  login: LoginDetails;

  constructor(private accSVC: AccountService,
              private router: Router,
              private spinSVC: Ng4LoadingSpinnerService) {
    this.login = new LoginDetails();

    this.validationMessage = null;
   }

  ngOnInit() {
  }

  signin(){
    this.validationMessage = null;
    this.spinSVC.show();

    this.accSVC.signin(this.login.username, this.login.password)
      .then(data => {

        this.spinSVC.hide();
      })
      .catch(err => {
        this.validationMessage = err.message      
        this.spinSVC.hide();
      })
    
  }
}
