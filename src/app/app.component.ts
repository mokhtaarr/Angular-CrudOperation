import { Component, Output } from '@angular/core';
import { SuperHero } from './Models/Super-hero';
import { SuperHeroService } from './Services/super-hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'SuperHero.UI';
  heroToEdit ?:SuperHero;  
  heros:SuperHero[]=[];

  constructor(private superHeroService:SuperHeroService){
   
  }

  ngOnInit():void{
    this.superHeroService
    .getSuperHero().
    subscribe((res : SuperHero[])=> (this.heros = res))
  }

  updatedHero(newHeroes:SuperHero[]){
    this.heros = newHeroes;
  }

  initNewHero() {
    this.heroToEdit = new SuperHero();
  }

  editHero(hero:SuperHero){
    this.heroToEdit = hero;
  }
}
