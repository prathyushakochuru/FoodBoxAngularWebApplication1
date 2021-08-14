import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../products.model';
import { Order } from '../order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public products:any;
  private food:any;
  public name:string='';
  public desc: string='';
  public price: number=0;
  public count:number=0;
  public username: string='';
  public firstname:string='';
  public email:string='';
  public address:string='';
  public city:string='';
  public state:string='';
  public zip:string='';
  public ordernum:string=Math.random().toString(16).substr(2, 16);
  public date:Date = new Date();

  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.food = this.activatedRoute.params.subscribe(params=> {
      this.name= params['name'];
      this.desc= params['desc'];
      this.price=params['price'];
      this.count=params['count'];
      this.username=params['username'];
    })
  }

  createOrder()
  {
   let order:Order = {
     productname:this.name,
     price:this.price,
     username:this.username,
     firstname:this.firstname,
     lastname:this.firstname,
     emailid:this.email,
     address:this.address+', '+this.city+', '+this.state+', '+this.zip,
     ordernum:this.ordernum,
     createdate:this.date.toDateString()

   };
   this.apiService.createOrder(order).subscribe(response=>console.log(response),err=>console.log(err));
   this.router.navigate(["/order", {strusername:this.username, ordernum:this.ordernum}])

  }

}
