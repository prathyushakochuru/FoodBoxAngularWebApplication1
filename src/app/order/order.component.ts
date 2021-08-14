import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../products.model';
import { Order } from '../order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  public strusername: string='';
  public order:any;
  public ordernum:string='';

  public randomNum: number=0;

  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.order = this.activatedRoute.params.subscribe(params=> {
      this.strusername= params['strusername'];
      this.ordernum= params['ordernum'];
     
    })
  }

  gobacktouserpage()
 {
   this.router.navigate(['/userpage', {strusername:this.strusername}])
 }

  
}
