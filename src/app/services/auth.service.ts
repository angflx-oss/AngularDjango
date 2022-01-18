import { Injectable } from '@angular/core';

import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  logout(): void{
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
  }
}
