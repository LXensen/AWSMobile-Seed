import { AccountService } from './../services/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth, Logger } from 'aws-amplify';

const logger = new Logger('ConfirmSignUp');

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  public code: string;
  public username: string;

  constructor(private router: Router,
              private acctSVC: AccountService) { }

  ngOnInit() {
  }

  confirm() {
    this.acctSVC.confirm(this.username, this.code)
      .then(data => {

      })
      .catch(err => {

      })
  }

  resendCode() {
    this.acctSVC.resendCode(this.username)
      .then(data => {

      })
      .catch(err => {

      })
  }
}