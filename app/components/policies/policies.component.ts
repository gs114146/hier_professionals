import { Component, OnInit } from '@angular/core';
import { GetApiService } from './../../servies/get-api.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

    policy : any = [];
    url : string;

    constructor(private getApiService: GetApiService){    	
    }

    ngOnInit(){
      this.getPolicyData();
      this.url = this.getApiService.api_URL;
    }

    getPolicyData(){
    	this.getApiService.fetchPolicy().subscribe((res : any)=>{    		
        	if(res.success == true){    
              this.policy = res.data;
            }
	    });
    }

}
