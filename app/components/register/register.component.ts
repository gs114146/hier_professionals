import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { GetApiService } from './../../servies/get-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
      constructor(private formBuilder: FormBuilder, private getApiService: GetApiService) { }

      ngOnInit(): void {
        window.scrollTo(0, 0)
        this.registerForm = this.formBuilder.group({            
            first_name: ['Rahul', Validators.required],
            last_name: ['Beddi', Validators.required],
            email: ['rahulbeddi@example.com', [Validators.required,Validators.email]],
            city: ['Mohali',Validators.required],
            province: ['Punjab',Validators.required],
            password: ['1234',Validators.required],
            confirm_password: ['1234',Validators.required],
        })
      }

   // convenience getter for easy access to form fields
    get f() { 
        return this.registerForm.controls; 
    }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        else{
            let fd = this.registerForm.value;           
            var formData: any = new FormData();
            formData.append("first_name", fd.first_name);
            formData.append("last_name", fd.last_name);
            formData.append("email", fd.email);
            formData.append("city", fd.city);
            formData.append("province", fd.province);
            formData.append("password", fd.password);
            formData.append("confirm_password", fd.confirm_password);
            // return;
            this.getApiService.registerApi(fd).subscribe((res : any)=>{
               
            });           
            // this.getApiService.someTest().subscribe((res : any)=>{
            //     console.log(res);
            // });            
        }
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}