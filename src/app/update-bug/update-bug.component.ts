import { Component, OnInit } from '@angular/core';
import { Bug } from '../Bug';
import { BugService } from '../bug.service';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {
  title:string = 'updateBug';
  bug:Bug=new Bug(); //model -stores all form data
  bugArray:Bug[]=[];
  constructor(private bugService:BugService) { }
  updateBug()
{const promise = this.bugService.updateBug(this.bug,this.bug.id);
  promise.subscribe((response: any)=> {
    console.log(response);
    alert('Bug added..')

  },
    (  error: { ok: any; })=> {
    console.log(error);
    if(!error.ok)

    alert('error Happened')
  })

}

  ngOnInit(): void {
  }

}
