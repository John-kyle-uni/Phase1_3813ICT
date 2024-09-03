
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  getCurrentUser() {
    return localStorage.getItem('user');
  }

  login(user: { username: string, password: string }) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout() {
    localStorage.removeItem('user');
  }
}