import { Component, OnInit } from '@angular/core';
import { UpdatedlogService } from '../updatedlog.service';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {

  //  message : string;
  //  constructor(private UpdatedlogService : UpdatedlogService) { }

  ngOnInit(): void {
    //  this.message = this.UpdatedlogService.sayHello("child 3-");
  }

}
