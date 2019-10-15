import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  opc1(){
    this.router.navigateByUrl("atractivos");
  }

  opc2(){
    this.router.navigateByUrl("atractivos2");
  }

  opc3(){
    this.router.navigateByUrl("atractivos3");
  }

}
