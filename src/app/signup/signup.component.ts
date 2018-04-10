import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

export class UserDetails {
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
  public userDetails: UserDetails

  constructor(private accSVC: AccountService,
              private spinSVC: Ng4LoadingSpinnerService) {

              this.userDetails = new UserDetails();

              this.validationMessage = null;
               }

  ngOnInit() {
  }

  signup(){
    //let details = this.logindeails;
    this.validationMessage = null;
    this.spinSVC.show();

    this.accSVC.signup(this.userDetails.username, this.userDetails.password, this.userDetails.email)
      .then(data => {

        this.spinSVC.hide();
      })
      .catch(err => {
        this.validationMessage = err.message;
        this.spinSVC.hide();
      })
  }
}
