import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productspublic',
  templateUrl: './productspublic.component.html',
  styleUrls: ['./productspublic.component.css']
})
export class ProductspublicComponent implements OnInit {
  public products:any;
  private strsearch: any;

  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.products = this.activatedRoute.params.subscribe(params=> {
      this.strsearch= params['strsearch'];
      this.getByName(this.strsearch);
  });
}

  getByName(search: string)
  {
    this.apiService.getProductsByName(search).subscribe(res=>{
      this.products = res;
    });
  }

}
