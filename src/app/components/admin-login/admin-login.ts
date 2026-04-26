import { Component } from '@angular/core';
import { FormControl,FormGroup,ReactiveFormsModule,Validators, } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-login.html',
  styleUrl: './admin-login.css',
})
export class AdminLogin {
constructor(private router:Router){}

adminloginForm = new FormGroup({
    email: new FormControl('anupmishra2040@gmail.com', [Validators.required, Validators.email]),
    password: new FormControl('Mishra@123', [Validators.required, Validators.minLength(8)])
  });

    loginbtn() {
    if(this.adminloginForm.valid){
 this.router.navigate(['/admin']);

    }
}
}