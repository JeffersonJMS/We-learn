import { Component, OnInit, NgModule } from '@angular/core';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectRoute(rota:string){
    this.router.navigateByUrl(rota)
  }

}
