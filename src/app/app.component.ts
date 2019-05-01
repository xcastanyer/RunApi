import { Component } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XCO';
constructor(private router:Router){}
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['cuentas/login']);
  }
}
