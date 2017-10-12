import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
//import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styles: []
})
export class ResultComponent implements OnInit {

  heroes:Heroe[] = []
  keyWord:string;

  constructor(
    private _heroesService: HeroesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    //this.heroes = this.resultadoHeroes.busquedaHeroe;
    this.activatedRoute.params.subscribe(params =>{
      console.log(params);
      this.keyWord = params.heroe;
      this.heroes = this._heroesService.buscarHeroes(params.heroe);
      console.log(this.heroes)
    })
  }

}
