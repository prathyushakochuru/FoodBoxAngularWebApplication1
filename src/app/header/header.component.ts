import { Component,Input, OnInit, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchstring!: string;
  @Output() sendsearch =new EventEmitter();

  constructor(private router: Router) { 
    //this.registerForm = [''];
  }

  ngOnInit(): void {
    
  }

  goToProducts(){
    console.log(this.searchstring);
    this.router.navigate(['/prodspublic',{strsearch: this.searchstring}]);
  }

  onSubmit() {
  }

}
