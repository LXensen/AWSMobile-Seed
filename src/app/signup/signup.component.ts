import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

export class LogInDetails {
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
  public loginDetails: LogInDetails

  constructor(private accSVC: AccountService,
              private spinSVC: Ng4LoadingSpinnerService) {

              this.loginDetails = new LogInDetails();

              this.validationMessage = null;
               }

  ngOnInit() {
  }

  signup(){
    //let details = this.logindeails;
    this.validationMessage = null;
    this.spinSVC.show();

    this.accSVC.signup(this.loginDetails.username, this.loginDetails.password, this.loginDetails.email)
      .then(data => {
debugger
        this.spinSVC.hide();
      })
      .catch(err => {
        debugger;
        this.validationMessage = err.message;
        this.spinSVC.hide();
      })
  }
}
