import { Injectable } from '@angular/core';
import { SuperHero } from '../Models/Super-hero';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor(private http:HttpClient) { }


  public getSuperHero():Observable<SuperHero[]>
  {
    return this.http.get<SuperHero[]>(`${environment.apiUrl}SuperHero`);
  }

  public UpdateSuperHero(hero:SuperHero):Observable<SuperHero[]>
  {
    return this.http.put<SuperHero[]>(`${environment.apiUrl}SuperHero`,hero);
  }

  public CreateSuperHero(hero:SuperHero):Observable<SuperHero[]>
  {
    return this.http.post<SuperHero[]>(`${environment.apiUrl}SuperHero`,hero);
  }

  public DeleteSuperHero(hero:SuperHero):Observable<SuperHero[]>
  {
    return this.http.delete<SuperHero[]>(`${environment.apiUrl}SuperHero/${hero.id}`);
  }
}

