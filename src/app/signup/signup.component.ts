import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

export class LoginDetails {
  username: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public validationMessage: string;
  public logindeails: LoginDetails

  constructor(private accSVC: AccountService,
              private spinSVC: Ng4LoadingSpinnerService) {

              this.logindeails = new LoginDetails();

              this.validationMessage = null;
               }

  ngOnInit() {
  }

  signup(){
    this.validationMessage = null;
    this.spinSVC.show();

    this.accSVC.signup(this.logindeails.username, this.logindeails.password, this.logindeails.email)
      .then(data => {

        this.spinSVC.hide();
      })
      .catch(err => {
        this.validationMessage = err.message;
        this.spinSVC.hide();
      })
  }
}
