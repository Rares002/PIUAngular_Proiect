import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
  ];

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    return user !== undefined;
  }

  signup(username: string, password: string): boolean {
    const userExists = this.users.some(u => u.username === username);
    if (!userExists) {
      this.users.push({ username, password });
      return true;
    }
    return false;
  }
}
