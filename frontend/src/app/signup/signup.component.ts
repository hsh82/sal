import { Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from "@angular/router";
import { AuthService } from "../auth.service";
import { HttpClientModule } from '@angular/common/http';
import { response } from "express";


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet,CommonModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  userTemp = {email : "" , username : "" , password : ""}
  
    responesmassege = ""
    constructor(private authService: AuthService, private router: Router) {}
  
    userMake(Email : string, Username:string,password:string) {
      this.userTemp.username = Username 
      this.userTemp.password = password
      this.userTemp.email = Email
      this.authService.signup(this.userTemp).subscribe(
      
  
      (response) => {
        this.responesmassege = ('Sign Up was successful!  Log In now !')
        
        // this.router.navigate(['/login']);
      
      
      },
      
      (error) => {
      
      console.error('sigh up  failed:', error);
      this.responesmassege = error.error.message
      
      });}



}

