import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Admin } from '../admin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //public user:any;
  username!: string;
  @Output() sendsearch =new EventEmitter();
  public admin:any
 // username!: string;
  private stringusername: any;
  private name: string = '';
  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { 
    
  }
  ngOnInit(): void {
    

    this.stringusername = this.activatedRoute.params.subscribe(params=> {
      this.username = params['username'];
      this.name= this.username;
    })
  }

  getAdminLogin()
  {
    this.apiService.getAdminbyName(this.username).subscribe(res=>{
      this.admin = res;
    });
    
  if(this.admin!=null)
  {
    window.confirm("Incorrect username or password!")

  } 
  else{
    this.router.navigate(['/products',{strusername: this.username}]);
  }
    
  }

}
