import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http:Http) {
  }

  url:string = 'https://jsonplaceholder.typicode.com';

  getUsers() {
    return this.http.get(this.url + '/users')
      .map((response:Response) => response.json())
      .catch(this.handleError)
  }

  getUser(id) {
    return this.http.get(this.url + '/users/' + id)
      .map((response:Response) => response.json())
      .catch(this.handleError)
  }

  handleError(error:Response) {
    return Observable.throw(error.statusText);
  }


}
