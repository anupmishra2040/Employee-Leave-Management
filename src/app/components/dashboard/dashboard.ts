import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpolyeeData } from '../../services/empolyee-data';
import { Router } from '@angular/router';
import { minDateValidator } from '../../Validator/min-date.validator';
import { Admin } from "../admin/admin";

@Component({
  selector: 'app-dashboard',
  imports: [ReactiveFormsModule, Admin],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  employeesStatus = signal<any[]>([]);
  todayDate: string = new Date().toLocaleDateString('en-CA');

  constructor(
    private empolyeeData: EmpolyeeData,
    private route: Router,
  ) {}
  ngOnInit(){
    this.getEmpolyeeStatusdata();
  }

  leavesForm = new FormGroup({
    employeeName: new FormControl('', [Validators.required]),
    leave_type: new FormControl('', [Validators.required]),
    fromDate: new FormControl('', [Validators.required, minDateValidator(new Date())]),
    toDate: new FormControl('', [Validators.required, minDateValidator(new Date())]),
    reason: new FormControl('', Validators.required),
  });

  leavesdata() {
    let data: any = this.leavesForm.value;

    this.empolyeeData.saveuser(data).subscribe((resp) => {
      if (resp) {
        console.log(resp);
      }
    });
  }
  getEmpolyeeStatusdata(){
    this.empolyeeData.getEmployee().subscribe((statusdata)=>{
      this.employeesStatus.set(statusdata)
    })
  }
  
}
