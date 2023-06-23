import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  goTo(link: string): void {
    this.router.navigateByUrl(link);
  }


}
