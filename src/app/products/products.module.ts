import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ApiService } from '../api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule
  ],
  providers:[ApiService]
})
export class ProductsModule { }
