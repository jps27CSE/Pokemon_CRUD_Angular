import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymServiceService {
  private Gym_Home_API_URL = '/api/gyms';

  constructor(private http: HttpClient) {}

  getAllGyms(): Observable<any[]> {
    return this.http.get<any[]>(this.Gym_Home_API_URL);
  }
}
