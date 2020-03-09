import { Component, OnInit } from '@angular/core';
import { GetApiService } from './../../servies/get-api.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

    terms : any = [];
    url : string;

    constructor(private getApiService: GetApiService){    	
    }

    ngOnInit(){
      this.getTermsData();
      this.url = this.getApiService.api_URL;
    }

    getTermsData(){
    	this.getApiService.fetchTerms().subscribe((res : any)=>{    		
        	if(res.success == true){    
              this.terms = res.data;
            }
	    });
    }
}
