import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GetApiService {

	apiURL : string = 'http://localhost:8000/api/';
    api_URL : string = 'http://localhost:8000/';
	httpOptions:any;

	constructor(private httpClient: HttpClient) {
        this.httpOptions = {
            headers: new HttpHeaders({
                // 'Accept':"application/json",
                'Content-Type': 'application/json'
                // 'Content-Type': 'multipart/form-data; boundry=50'
            })
        }
    }
	
    /*
    *Api to get home page sections
    */
	public fetchSections(){
  		return this.httpClient.get(this.apiURL + 'getSection')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
  	}

    /*
    * Api to get blogs
    */ 
    public fetchBlogs(){
          return this.httpClient.get(this.apiURL + 'getAllBlogs')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
      }

    /*
    * Api to get about us
    */ 
    public fetchAboutus(){
          return this.httpClient.get(this.apiURL + 'getAboutus')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
      }

    /*
    * Api to get policies
    */ 
    public fetchPolicy(){
          return this.httpClient.get(this.apiURL + 'getPolicy')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
      }

    /*
    * Api to get terms
    */ 
    public fetchTerms(){
          return this.httpClient.get(this.apiURL + 'getTerms')
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
      }

      /*
    * Api to register user
    */ 
    public registerApi(data){
      console.log(data)
          return this.httpClient.post(this.apiURL + 'register',data,this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    } 

    public someTest(){
        // http://dummy.restapiexample.com/api/v1/create
        let data = {"name":"test","salary":"123","age":"23"};
        return this.httpClient.post('http://dummy.restapiexample.com/api/v1/create',data)
            .pipe(
                retry(1),
                catchError(this.handleError)
            )
    }

  	 // Error handling 
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        } else {
            // Get server-side error
            errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
        }
        window.alert(errorMessage);
        return throwError(errorMessage);
    } 
}
  