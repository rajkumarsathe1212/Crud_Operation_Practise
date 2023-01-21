import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  users:any;

  constructor(private api:ApiService) {}

  ngOnInit(): void {
    this.api.get("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud").subscribe((result:any)=>{
      this.users = result;
    })
  }

  // load(){

  // }

  delete(id:any){
    if(confirm("Sure to delete")){
      this.api.delete("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud/" + id).subscribe((result)=>{
        this.ngOnInit();
      })
    }
  }


}
