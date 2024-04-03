import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymServiceService {
  private Gym_Home_API_URL = 'http://localhost:8080/gyms';

  constructor(private http: HttpClient) {}

  getAllGyms(): Observable<any[]> {
    return this.http.get<any[]>(this.Gym_Home_API_URL);
  }
  SaveGym(data: any): Observable<any> {
    const url = `${this.Gym_Home_API_URL}/save`;
    return this.http.post<any>(url, data);
  }
}
