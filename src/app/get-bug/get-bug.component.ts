import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';
import { STATUS } from '../STATUS';

@Component({
  selector: 'app-get-bug',
  templateUrl: './get-bug.component.html',
  styleUrls: ['./get-bug.component.css']
})
export class GetBugComponent implements OnInit {
  title:string = 'getBug';
  bug:Bug=new Bug(); //model -stores all form data
  bugArray: any;
  constructor(private bugService:BugService) { }

  getBug(name:any)
{
this.bugService.getBug(name).subscribe(response=>
  {
    this.bugArray=[response];
    console.log(response);
    alert('bug shown....');

  },
  error=>{
    console.log(error);
    alert('error happened....');

  }
  )
}
getBugbyStatus(status:any)
{
this.bugService.getBugbyStatus(status).subscribe(response=>
  {
    this.bugArray=[response];
    console.log(response);
    alert('bug shown....');

  },
  error=>{
    console.log(error);
    alert('error happened....');

  }
  )
}
  ngOnInit(): void {

    const observable = this.bugService.getBugs();
    observable.subscribe(response => {
      console.log(response);
      this.bugArray = response;
     });
  }

}
