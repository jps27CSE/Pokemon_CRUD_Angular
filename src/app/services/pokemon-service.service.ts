import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonServiceService {
  private Gym_Pokemon_API_URL = 'http://localhost:8080/pokemon';

  constructor(private http: HttpClient) {}

  getAllPokemons(): Observable<any[]> {
    return this.http.get<any[]>(this.Gym_Pokemon_API_URL);
  }

  getPokemonById(id: string): Observable<any> {
    const url = `${this.Gym_Pokemon_API_URL}/${id}`;
    return this.http.get<any>(url);
  }

  savePokemon(data: any): Observable<any> {
    const url = `${this.Gym_Pokemon_API_URL}`;
    return this.http.post<any>(url, data);
  }

  updatePokemon(id: string, data: any): Observable<any> {
    const url = `${this.Gym_Pokemon_API_URL}/${id}`;
    return this.http.put<any>(url, data);
  }

  deletePokemon(id: string): Observable<any> {
    const url = `${this.Gym_Pokemon_API_URL}/${id}`;
    return this.http.delete<any>(url);
  }
}
