import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Bug } from './Bug';
const URL='http://localhost:8081/bug/'
@Injectable({
  providedIn: 'root'
})
export class BugService {
  constructor(private http: HttpClient) { }
  //service for create bug
  saveBug(bug: Bug) {
    return this.http.post(URL,bug, {
      headers: { "content-type": 'application/json' }
    });
  }
 //service to get all bugs
  getBugs(){
    return this.http.get(URL);
  }
//service for get bug by name
  getBugbyName(name:any){
    return this.http.get(URL+'name/'+ name, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
      });
  }
  //service for get bug by status
  getBugbyStatus(status:any){
    return this.http.get(URL+'status/'+ status, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
      });
  }
  getBugbyStatusAndName(name:string,status:string){
    return this.http.get(URL+'search/'+ name+'?status='+status, {
      headers: {
        "content-type": 'application/json',
        reponseType: 'text'
      }
      });
  }
  //service for update Bug
  updateBug(bug: Bug, id: string) {
    return this.http.put(URL+id, bug, {
      headers: { "content-type": 'application/json' }


    });
  }
  delete(bugid:number  ){
    return this.http.delete(URL+bugid);
  }
}
