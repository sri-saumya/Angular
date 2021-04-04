import { Component, Inject, OnInit } from '@angular/core';
import { APIKEY } from '../child1/value';
import { LogService } from '../log.service';
import { UpdatedlogService } from '../updatedlog.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
  //providers : [LogService]
})
export class Child2Component implements OnInit {

   message : string;
    apikey: any;
   constructor(private Updatedlogservice : UpdatedlogService, @Inject(APIKEY) a) {
     this.apikey = a;
     
    }

  ngOnInit(): void {
    
    this.message = this.Updatedlogservice.sayHello("Child 2");
    //this.message = this.LogService.sayHello("Child 2");
     
    
  }


}
