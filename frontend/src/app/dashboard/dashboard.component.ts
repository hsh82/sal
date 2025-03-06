import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from '../services/dashboard.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  
  constructor(private authService: AuthService, private router: Router,private dashboardService: DashboardService) {}
   token = localStorage.getItem('accessToken');
   headers = new HttpHeaders().set('accessToken', `Bearer ${this.token}`);
   userData: any;
   ngOnInit(): void {
    this.fetchUserData(); 
  }

  fetchUserData(): void {
    this.dashboardService.getUserData().subscribe(
      (data: any) => {
        this.userData = data; 
        const date = new Date(this.userData.creactedAt);
        const options = { timeZone: 'Asia/Tehran' };
        this.userData.creactedAt = date.toLocaleString('fa-IR', options);


      },
      (error: any) => {
        console.error('Error fetching user data:', error);
        
      }
    );
  }

   
  userout(){

    this.router.navigate(['/login']);
  }
}
function moment(arg0: string) {
  throw new Error('Function not implemented.');
}

