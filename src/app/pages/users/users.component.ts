import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../shared/services/common.service';
import { validationMessage } from '../../shared/constant/validationMessage'
import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userForm!: FormGroup;
  users: any[] = [];
  showForm: boolean = false;
  userData:any;
  topics:any;
  validationMessage = validationMessage;
 

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private commonService: CommonService,
    private spinner : NgxSpinnerService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      gender: ['', Validators.required],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      topic: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      state: ['', Validators.required],
      district: ['', Validators.required]
    });
    this.getData()
    this.topics =[
      {id:1,value:'Java Script'},
      {id:2,value:'React'},
      {id:3,value:'Angular'},
      {id:4,value:'Node'},
      {id:5,value:'PhP'}
      
    ]
  }

 
  openForm() {
    this.showForm = true;
    this.userForm.reset();
  }

  closeForm() {
    this.showForm = false;
    this.userForm.reset();
  }

  onSubmit() {
    const formData = this.userForm.value;
    const user = {
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      contact: formData.contactNo,
      topic: formData.topic,
      email: formData.email,
      state: formData.state,
      district: formData.district
    };

    this.http.post('http://localhost:4000/add-user', user)
      .subscribe({
        next: (res) => {
          console.log('User added:', res);
          // this.commonService.notification(this.validationMessage.toaster.success,'Successfully post data')
          this.showForm = false;
          this.getData();
        },
        error: (err) => {
          console.error('Error:', err);
          // this.commonService.notification(this.validationMessage.toaster.error,'Something went wrong')

        }
      });
  }
  
getData(){
  this.spinner.show('dataTableLoader');
  this.http.get('http://localhost:4000/get-user').subscribe({
    next:(res:any)=>{
      console.log(res);
      // console.log(res.data)
      this.userData =res.data;
      this.spinner.hide('dataTableLoader');
    },
    error:(err)=>{
      console.log(err);
      this.spinner.hide('dataTableLoader');
    }
  })
}

delete(id:any){
this.http.delete(`http://localhost:4000/delete-user/${id}`).subscribe({
  next:(res:any)=>{
    console.log(res);
    this.getData();
  },
  error:(err)=>{
    console.log("error",err);
    
  }
})
}
}
