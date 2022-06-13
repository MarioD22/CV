import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo-ap',
  templateUrl: './logo-ap.component.html',
  styleUrls: ['./logo-ap.component.css']
})
export class LogoAPComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  login(){
    this.route.navigate(['/login'])
  }

}
