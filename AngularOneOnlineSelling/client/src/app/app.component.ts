import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'client';
  products: IProduct[];
  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get("https://localhost:7099/api/Product").subscribe((response:IProduct[]) => {
      //console.log(response);
      this.products = response;
      console.log(this.products);      
    }, error => {
      console.log(error);
    })
  }
}
