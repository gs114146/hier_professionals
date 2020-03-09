import { Component } from '@angular/core';
import { GetApiService } from './servies/get-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    sections : any    
    constructor(private getApiService: GetApiService){    	
    }

    ngOnInit(){    	
      
    }

    getSectionsData(){
    	this.getApiService.fetchSections().subscribe((res : any)=>{
        		if(res.success == true){      
              this.sections = res.data;
            }
	    });
    }
}

