import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) {

  }

  url:string = 'https://jsonplaceholder.typicode.com/users';

  getUsers() {
    return this.http.get(this.url)
      .map((response:Response) => {
        return response.json()
      });
// .catch(this.handleError);
  }

  // handleError(error:Response) {
  //   return Observable.throw(error.statusText);
  // }

}
