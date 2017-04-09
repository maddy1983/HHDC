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

  getUsers() {
    this.dataService.getUsers()
      .subscribe(res => this.users = res)
  }

  ngOnInit() {
    this.getUsers()
  }

}
