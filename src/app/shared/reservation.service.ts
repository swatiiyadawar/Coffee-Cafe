import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WEB3FORMS_ACCESS_KEY, WEB3FORMS_ENDPOINT } from './api.config';

export interface InquiryDetails {
  name: string;
  email: string;
  phone: string;
  purpose: string;
  preferred_date: string;
  message: string;
}

interface Web3FormsResponse {
  success: boolean;
  message?: string;
}

@Injectable({ providedIn: 'root' })
export class ReservationService {
  private readonly http = inject(HttpClient);
  send(details: InquiryDetails): Observable<Web3FormsResponse> {
    return this.http.post<Web3FormsResponse>(
      WEB3FORMS_ENDPOINT,
      {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Coffee Cafe inquiry — ${details.purpose}`,
        from_name: details.name,
        replyto: details.email,
        botcheck: '',
        ...details,
      },
      { headers: { Accept: 'application/json' } },
    );
  }
}
