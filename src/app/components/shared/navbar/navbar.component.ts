import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  buscarHeroe(heroe:string){
    //console.log(heroe);
    this.router.navigate(['../busqueda', heroe])
  }

}
