import { HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { EmpolyeeData } from '../../services/empolyee-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin {
  employees = signal<any[]>([]);
  constructor(private empolyeedata: EmpolyeeData) {}
  ngOnInit() {
    this.getEmployee();
  }
  getEmployee() {
    this.empolyeedata.getEmployee().subscribe((data) => {

      this.employees.set(data);
    });
  }
  changeStatus(employee: any, status: string) {
this.empolyeedata.currentStatus(employee.id ,status).subscribe(()=>{
    this.getEmployee()
})
  }
}
