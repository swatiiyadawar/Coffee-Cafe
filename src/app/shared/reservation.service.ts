import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from './api.config';

export interface ReservationDetails {
  name: string;
  email: string;
  phone: string;
  location: string;
  coffee: string;
  seating: string;
  notes: string;
}

interface ReservationResponse { message: string; }

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private readonly http = inject(HttpClient);
  send(details: ReservationDetails): Observable<ReservationResponse> {
    return this.http.post<ReservationResponse>(`${API_BASE_URL}/reservations`, details);
  }
}
