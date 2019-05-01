import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource,  MatPaginator, MatSort } from '@angular/material';
import { Employee } from 'src/app/shared/models/networks';
import { ValuesService } from 'src/app/shared/values.service';
import { UtilsUI } from 'src/app/utils/utils-ui';



 
@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls:['./prueba.component.css']  ,
})
export class PruebaComponent implements OnInit{


  displayedColumns: string[] =['id','employee_name','employee_salary','employee_age']

  employees: MatTableDataSource<Employee>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(): void {
    
   
   
    
  }
 
  // message$: Observable<string>;
 
  // private messages = [
  //   'You are my hero!',
  //   'You are the best hero!',
  //   'Will you be my hero?'
  // ];

  
  constructor(private values:ValuesService, private utils:UtilsUI) { 
 
    let employeesData : Employee[];
    this.values.obtenerValues().subscribe(data=>{
        
      console.log(data);
      employeesData = data
      this.employees = new MatTableDataSource(employeesData);
      this.employees.paginator = this.paginator;
      this.employees.sort = this.sort;
    },
    err=>{
      console.log(err);
    });

  }
 
  resend() {
  

    this.utils.confirm("Vas eliminar un registro","delete",()=>{
      alert("Elimimado!!")
      }
    )
    // let valores = []
    // this.values.obtenerValues().subscribe((data)=>{
    //   console.log(data);
    //   this.messages = data;
    // },
    // err =>{
    //     console.log(err);
    // })
    // this.message$ = interval(500).pipe(
    //   map(i => this.messages[i]),
    //   take(this.messages.length)
    // );
   


  }
}