import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
//import { ApiService } from '../api.service';
import { Product } from 'src/app/products.model';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public products:any;
  public name:string='';
  public description:string='';
  public category:string='';
  public price:string='';
  
  constructor(private formBuilder:FormBuilder, private apiService :ApiService,
    private router:Router) { 
    
  }

  
  ngOnInit(): void {

  }

  createProduct()
  {
    let product:Product={
      productname:this.name,
      description:this.description,
      category:this.category,
      price:  Number(this.price)

    };
    this.apiService.addProduct(product).subscribe(response=>console.log(response),err=>console.log(err));
    this.router.navigateByUrl("/products"); 
  }
  
  }

  



