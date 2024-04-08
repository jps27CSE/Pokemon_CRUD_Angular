import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GymServiceService {
  private Gym_Home_API_URL = 'http://localhost:8080/gym';

  constructor(private http: HttpClient) {}

  getAllGyms(): Observable<any[]> {
    return this.http.get<any[]>(this.Gym_Home_API_URL);
  }
  SaveGym(data: any): Observable<any> {
    const url = `${this.Gym_Home_API_URL}`;
    return this.http.post<any>(url, data);
  }
  getSpecificGym(data: any): Observable<any> {
    const url = `${this.Gym_Home_API_URL}/${data}`;
    return this.http.get<any>(url, data);
  }
  EditGym(id: number, data: any): Observable<any> {
    const url = `${this.Gym_Home_API_URL}/${id}`;
    return this.http.put<any>(url, data);
  }

  DeleteGym(id: number): Observable<any> {
    const url = `${this.Gym_Home_API_URL}/${id}`;
    return this.http.delete<any>(url);
  }
}
