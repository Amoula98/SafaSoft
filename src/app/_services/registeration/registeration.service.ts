import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterationService {
  baseUrl ='https://id.safav2.io.safavisa.com'
  constructor(private httpClient: HttpClient) { }

  registeration(data) {
    return this.httpClient.post(`${this.baseUrl}/register`, data);
  }
}
