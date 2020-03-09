import { Component, OnInit } from '@angular/core';
import { GetApiService } from './../../servies/get-api.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

    aboutus : any = [];
    url : string;

    constructor(private getApiService: GetApiService){    	
    }

    ngOnInit(){
      this.getAboutData();
      this.url = this.getApiService.api_URL;
    }

    getAboutData(){
    	this.getApiService.fetchAboutus().subscribe((res : any)=>{    		
        	if(res.success == true){    
              this.aboutus = res.data;
            }
	    });
    }

}
