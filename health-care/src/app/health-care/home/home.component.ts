import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  carouselData: any[] = [];
  open=false;
  isSubmitted:any=false;
  constructor(private http: HttpClient,public router:Router) {
   
  }
  ngOnInit() {
    this.http.get('assets/carousal-item.json').subscribe((data: any) => {
      this.carouselData = data;
    });
  }

toggleMenu(){
  this.open=!this.open;
}


}
