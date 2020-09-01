import { Injectable } from '@angular/core';
import { LoginViewModel } from '../models/LoginViewModel'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  currentUserName: string  = null;
  constructor() { }
}
