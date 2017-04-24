import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private route:Router, private location:Location) {
  }

  prev:string = 'Prev';
  next:string = 'Next';

  currScreen;
  navElems = [
    "/banner",
    "/zipResults",
    "/category",
    "/doorSize",
    "/collection",
    "/home",
    "/config",
    "/config/construction",
    "/config/color",
    "/config/topSection",
    "/config/glassType",
    "/config/lock",
    "/config/install",
    "/config/opener",
    "/config/openerSelected",
    "/config/additionalOptions",
    "/config/doorConfiguration",
    "/thankyou"
  ];

  ngAfterViewInit() {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  ngOnInit() {
    this.currScreen = this.navElems.indexOf(this.location.path());
  }

  nextBtn(id):void {
    if (this.navElems[id + 1] !== undefined) {
      this.currScreen = id + 1;
      this.toRoute(this.currScreen)
    }
  }

  prevBtn(id):void {
    this.currScreen = id - 1;
    this.toRoute(this.currScreen)
  }

  toRoute(path) {
    let link:any = this.navElems[path];
    this.route.navigateByUrl(link);
  }

}
