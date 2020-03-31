import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  gotoHome(f){
    console.log(f.value)
      this.router.navigateByUrl('/home');
    
  }
  ngOnInit() {
  }
  
}
