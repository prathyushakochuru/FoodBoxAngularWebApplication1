import { Component, OnInit,Output, EventEmitter, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  searchstring!: string;
  strusername!: string;
  @Output() sendsearch =new EventEmitter();
  public loginuser:any;
  private stringusername: any;
  private name: string = '';
  

  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.stringusername = this.activatedRoute.params.subscribe(params=> {
      this.strusername = params['strusername'];
      this.name= this.strusername;
    })
  }

  goToProducts()
  {
    console.log(this.searchstring);
    this.router.navigate(['/userprods',{strsearch: this.searchstring, username:this.strusername}]);
  }
  getUserbyName()
  {
    this.apiService.getUserbyName(this.strusername).subscribe(res=>{
      this.loginuser = res;
    });
    if(this.loginuser!=null)
  {
    window.confirm("Incorrect username or password!")

  } 
  else{
    this.router.navigate(['/userprods',{strusername: this.strusername}]);
  }
  }

  goToOrdersHistory()
  {
    this.router.navigate(['/orders',{strusername: this.strusername}]);
  }

}
