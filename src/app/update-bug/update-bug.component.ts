import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit { //controller
  title:string = 'updateBug';

  bug:Bug=new Bug(); //model -stores all form data
  bugArray:any;
  bugResult:any;
  name:String="";
  constructor(private bugService:BugService) { }
  updateBug()
{const promise = this.bugService.updateBug(this.bug,this.bug.id);

  promise.subscribe((response: any)=> {
    console.log(response);
    alert('Bug updated..')

  },
  error=> {
    console.log(error);
    alert('error happenned..')
  })


}

getBug() {
  const bugName = this.name.trim();
  if (bugName) {
    const promise = this.bugService.getBugbyName(bugName);
    promise.subscribe(response => {
      this.bugResult = response;
      console.log(this.bugResult);
      if(this.bugResult){
          this.bug=this.bugResult;
        }
      else{
        alert("Bug Name not in records");
      }
    },
      error => {
        console.log(error);
        alert('error happened..')
      })
  }
}

  ngOnInit(): void {
  }

}
