import { Component,Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user:any;
  username!: string;
  @Output() sendsearch =new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    
  }

  getUserLogin()
  {
    this.apiService.getUserbyName(this.username).subscribe(res=>{
      this.user = res;
    });
    
  if(this.user!=null)
  {
    window.confirm("Incorrect username or password!")

  } 
  else{
    this.router.navigate(['/userpage',{strusername: this.username}]);
  }
    
  }
}


