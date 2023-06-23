import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  sideBarOpen = true;

  constructor() { }

  ngOnInit() { }


  sideBarToggler(event: any) {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
