import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../shared/user.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { debug } from 'util';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }
  constructor(private service: UserService, private router: Router, private toastr: ToastrService) { }

  ngOnInit() {
    
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/home');
  }

  onSubmit(form: NgForm) {
    
    this.service.login(form.value).subscribe(
      (res: any) => {
        console.log('res',res);
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home');
      },
      err => {
        if (err.status == 400)
          this.toastr.error('Incorrect username or password.', 'Authentication failed.');
        else
        this.toastr.error(err.descripcion, 'Authentication failed.');
          console.log(err);
      }
    );
  }
}
