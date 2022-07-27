import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { 
  GoogleAuthProvider, 
  FacebookAuthProvider, 
  GithubAuthProvider, 
  UserCredential
} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  tokenIdSession$!: Subject<string>;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router
  ) { 
    this.tokenIdSession$ = new BehaviorSubject<string>("");
  }

  login(email: string, password: string) {

  }

  register(email: string, password: string) {
    
  }

  logout() {

  }

  forgotPassword(email: string) {

  }

  sendEmailForVarification(user: any) {

  }

  googleSignIn() {
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res: any) => {
      
      this.router.navigate(['/welcome']);
      sessionStorage.setItem('user', JSON.stringify(res.additionalUserInfo.profile));
      localStorage.setItem('token', JSON.stringify(res.additionalUserInfo.profile.id));
      this.tokenIdSession$.next(res.additionalUserInfo.profile.id);

      // email: "thetaichu@gmail.com"
      // given_name: "taichu"
      // granted_scopes: "openid https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      // id: "102445914067424742902"
      // locale: "vi"
      // name: "taichu"
      // picture: "https://lh3.googleusercontent.com/a-/AFdZucpSAvqIlefp1rzSqPyeJrscASt5tfyDQdUGrWTkzA=s96-c"
      // verified_email: true

    }, err => {
      alert(err.message);
    })
  }

}
