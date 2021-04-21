import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
@Component({
  selector: 'app-create-bug',
  templateUrl: './create-bug.component.html',
  styleUrls: ['./create-bug.component.css']
})
export class CreateBugComponent implements OnInit { //controller
  title:string = 'createBug';
  bug:Bug=new Bug(); //model -stores all form data
  bugArray:Bug[]=[];
  remainingText: number |unknown;
  remainingText1:number |undefined;
  constructor(private bugService:BugService) { }
  valueChange(value: number) {
    this.remainingText = 50 - value;
   }
   valueChange1(value: number) {
    this.remainingText1 = 100 - value;
   }

  saveBug(){
    const promise = this.bugService.saveBug(this.bug);
    promise.subscribe(response=> {
      console.log(response);
      alert('bug added..')
      this.bugArray.push(Object.assign({}, this.bug));
    },
    error=> {
      console.log(error);
      alert('error happenned..')
    })
  }
  ngOnInit(): void {
  }

}
