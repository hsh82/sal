import { Component ,OnInit} from "@angular/core";
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from "@angular/router";
import { AuthService } from "../auth.service";
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from "../dashboard/dashboard.component";


@Component({
  
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  selector: 'app-root',
  

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  componentTitle = "Log In";

  userTemp = {username : "",password : "" }
  responesmassege = ""
  constructor(private authService: AuthService,private router : Router) {}

  onSubmit(Username:string,password:string) {
    this.userTemp.username = Username 
    this.userTemp.password = password
    this.authService.login(this.userTemp).subscribe(
    

    (response) => {
      const token = response.accessToken
      localStorage.setItem('accessToken', token);
    this.responesmassege = ('Login was successful user :  ' + response )
    console.log('Login successful:', response);
    this.router.navigate(['/dashboard']);
    
    },
    
    (error) => {
    
    console.error('Login failed:', error);
    this.responesmassege = error.error.message
    
    });}
    


    

  }
