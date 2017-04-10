import {Injectable, Component, OnInit} from '@angular/core';
import {Resolve} from '@angular/router';
import {DataService} from "../shared/data-service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.less']
})
@Injectable()
export class ColorComponent implements OnInit {

  constructor(private dataService:DataService) {
  }

  users = [];
  author = [];

  writer:boolean = false;

  getUsersList() {
    this.dataService.getUsers()
      .subscribe(res => this.users = res)
  }
  getUserId(id){
    this.dataService.getUser(id)
      .subscribe(res => {
        this.writer = true;
        this.author = res;
      })
  }
  ngOnInit() {
    this.getUsersList()
  }

}
