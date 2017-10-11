import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe:any = {};

  constructor(private activateRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router:Router
  ) {

    this.activateRoute.params.subscribe(params =>{
      console.log(params.id);
      this.heroe = this._heroesService.getHero(params.id)
      console.log(this.heroe);
    })

   }

   backHero(){
     this.router.navigate(['/heroes'])
   }

  ngOnInit() {
  }

}
