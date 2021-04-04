import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

 
  apikey : any;
  message : string;
  constructor(private Logservice : LogService ) {} 

  ngOnInit(): void {
  this.message = this.Logservice.sayHello("orders");
  this.apikey = this.Logservice.getApiKey();
  console.log(this.apikey);
  }

}
