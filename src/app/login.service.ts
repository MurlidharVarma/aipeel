import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  isLoggedIn: boolean = false;

  constructor(private fireAuth: AngularFireAuth, private fs: AngularFirestore, private router: Router) {}

  async login(){
    try{
      const provider = new auth.GoogleAuthProvider();
      const creds = await this.fireAuth.signInWithPopup(provider);
  
      const result = await this.updateUserData(creds.user);
      this.user$.next(new User(creds.user));
      // let result = null;
      // this.user$.next(new User({uid: "A4nOa6rPYfTci86v3gdShxlLaPx1", email: "kerabazaar07@gmail.com", displayName: "Kerala Bazaar", photoURL: "https://lh3.googleusercontent.com/-bDZ259orEQE/AAA…MZuucmYIUC987AkTmPhHzqmHkKn7uWJOA/s96-c/photo.jpg"}))
      this.isLoggedIn = true;
      return result;
    }catch(err){
      console.error(err);
    }finally{
      this.router.navigate(["/folder/home"]);
    }
  }

  updateUserData(user){
    let userObj = {
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL,
      lastLoggedIn: new Date()
    };
    return this.fs.doc(`users/${userObj.uid}`).set(userObj, {merge: true});
  }

  async signOut() {
    await this.fireAuth.signOut();
    this.isLoggedIn=false;
    this.user$.next(null);
    this.router.navigate(['/folder/home']);
  }

  getUser(){
    return this.user$.getValue();
  }
}
