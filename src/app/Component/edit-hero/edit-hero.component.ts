import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SuperHero } from 'src/app/Models/Super-hero';
import { SuperHeroService } from 'src/app/Services/super-hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit{

  @Input() hero?: SuperHero;
  @Output() updatedSuperHero = new EventEmitter<SuperHero[]>();

  constructor(private superHeroServices:SuperHeroService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  UpdateHero(hero:SuperHero){
    this.superHeroServices.UpdateSuperHero(hero).subscribe((heroes:SuperHero[])=> this.updatedSuperHero.emit(heroes));
  }

  
  DeleteHero(hero:SuperHero){
    this.superHeroServices.DeleteSuperHero(hero).subscribe((heroes:SuperHero[])=> this.updatedSuperHero.emit(heroes));

  }

  
  CreateHero(hero:SuperHero){
    this.superHeroServices.CreateSuperHero(hero).subscribe((heroes:SuperHero[])=> this.updatedSuperHero.emit(heroes));

  }
}
