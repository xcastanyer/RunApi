import { UserService } from './../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: []
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService, private router:Router) { }

  ngOnInit() {
    this.service.formModel.reset();
  }

  onSubmit() {

    this.service.register().subscribe(
      (data) => {
     
        console.log(data);
        this.router.navigateByUrl('cuentas/login');
        this.toastr.success('Usuario creado correctamente.');
      },
      err => {
       
        console.log(err);
        this.toastr.error(err.error);
      }
    );
  }

}
