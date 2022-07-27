import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  jsonConsleGoogleCloud = `{
    "web":{
        "client_id":"798964895342-hkba27h77nmogd8pmfalmo1lfa2udjin.apps.googleusercontent.com",
        "project_id":"taichu-test1",
        "auth_uri":"https://accounts.google.com/o/oauth2/auth",
        "token_uri":"https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs",
        "client_secret":"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"
    }
  }`;
  
  constructor() { }

  ngOnInit() {
  }

}
