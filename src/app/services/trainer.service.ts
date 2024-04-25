import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private Gym_Trainer_API_URL = 'http://localhost:8080/trainer';

  constructor(private http: HttpClient) {}

  getTrainer(): Observable<any> {
    return this.http.get<any>(this.Gym_Trainer_API_URL);
  }

  saveTrainer(data: any): Observable<any> {
    const url = `${this.Gym_Trainer_API_URL}`;
    return this.http.post<any>(url, data);
  }
  updateTrainer(data: any): Observable<any> {
    const url = `${this.Gym_Trainer_API_URL}/update/${data.id}}`;
    return this.http.post<any>(url, data);
  }


  deleteTrainer(id: number): Observable<any> {
    return this.http.delete<any>(`${this.Gym_Trainer_API_URL}/${id}`);
  }
}
