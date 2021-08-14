import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Order } from '../order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  public orders:any
  //strsearch!: string;
  public stringsearch: any;
  public strusername:any;

  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.stringsearch = this.activatedRoute.params.subscribe(params=> {
 
      this.strusername=params['strusername']
      
      this.getOrdersByUName(this.strusername);
    })
  }

  gobacktouserpage()
 {
   this.router.navigate(['/userpage', {strusername:this.strusername}])
 }

 getOrdersByUName(username:string)
 {
  this.apiService.getOrdersbyUsername(username).subscribe(res=>{
    this.orders = res;
  });
 }

}
