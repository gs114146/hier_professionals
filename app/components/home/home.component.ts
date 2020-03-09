import { Component, OnInit } from '@angular/core';
import { GetApiService } from './../../servies/get-api.service';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchProfessional = FormGroup;
    sections : any = [];
    blogs : any = [];
    url : string;
    constructor(private getApiService: GetApiService){    	
    }

    ngOnInit(){
    	this.getSectionsData();
      this.getBlogsData();
      this.url = this.getApiService.api_URL;
      window.scrollTo(0, 0)
    }

    getSectionsData(){
    	this.getApiService.fetchSections().subscribe((res : any)=>{
        		if(res.success == true){    
              this.sections = res.data;
            }
	    });
    }

    getBlogsData(){
      this.getApiService.fetchBlogs().subscribe((res : any)=>{
            if(res.success == true){    
              this.blogs = res.data;
            }
      });
    }
}
