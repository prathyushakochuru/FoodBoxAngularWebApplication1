import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products.model';
import { Order } from './order.model';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   

  private produrl:string = "http://localhost:9000/foodboxapi";
  

  constructor(private httpClient:HttpClient) {}

    //get all food products
    public getProducts()
    {
      
      return this.httpClient.get(this.produrl + "/product");
    }

    //get products by name
    public getProductsByName(productname:string)
    {
      return this.httpClient.get(this.produrl + "/product/"+ productname);
    }

    //add new food product
    public addProduct(product:Product)
    {
      return this.httpClient.post(this.produrl+ "/product",product);
    }

    //update a product
    public updateProduct(product:Product)
    {
      return this.httpClient.put(this.produrl+ "/product", product);
    }

    //delete a product
    public deleteProduct(id:number)
    {
      return this.httpClient.delete(this.produrl+ "/product/" + id);
    }

    //get admin login
    public getAdminbyName(username:string)
    {
      return this.httpClient.get(this.produrl + "/admin/" + username);
    }

    //get user login
    public getUserbyName(username:string)
    {
      return this.httpClient.get(this.produrl + "/user/" + username);
    }
    
    //get orders for username login
      public getOrdersbyUsername(username:string)
    {
      return this.httpClient.get(this.produrl + "/orders/" + username);
    }

    //create order for the user
    public createOrder(order:Order)
    {
      return this.httpClient.post(this.produrl+"/orders",order);
    }


    
   }

