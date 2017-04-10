import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../shared/data-service";

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.less']
})
export class WriterComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }

  writer: boolean = false;

  getWriter(){
    let id = +this.route.snapshot.params['id'];
    this.dataService.getUser(id)
      .subscribe(res => this.writer = res)
  }


  ngOnInit() {
    this.getWriter()
  }

}
