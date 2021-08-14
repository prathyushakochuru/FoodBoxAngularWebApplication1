import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../products.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public login:any;
  public products:any;
  public strusername:string='';
  public stringsearch: string='';
  //private strusername: string = '';
  constructor(private activatedRoute: ActivatedRoute,private apiService:ApiService, private router:Router) { 
    
  }

  ngOnInit(): void {
    this.login = this.activatedRoute.params.subscribe(params=> {
      this.strusername= params['strusername'];
      this.stringsearch=params['strsearch'];
      this.getAllProducts();
    })
  }

  getByName(search: string)
  {
    this.apiService.getProductsByName(search).subscribe(res=>{
      this.products = res;
    });
  }

  getAllProducts(){
    this.apiService.getProducts().subscribe(res => {
      // console.log(res);
      this.products = res;
    });
  }
  goToCreate(){
    this.router.navigateByUrl("/products/create");
  }

  deleteProduct(id:number ){
    this.apiService.deleteProduct(id).subscribe(res=>{
      console.log("Product is deleted successfully !");
      //reload the products
      this.getAllProducts();
    });
  }

  updateProduct(products:Product)
  {
    this.apiService.updateProduct(products).subscribe(res=>{this.products=res;});
  }

  getSearchString($event: any)
  {
    this.stringsearch = $event;
  }

  

}
