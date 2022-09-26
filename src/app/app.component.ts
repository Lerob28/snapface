import { Component, OnInit } from '@angular/core';
// import { filter, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }

  logger(text: string): void {
    console.log(`${text}`);
  }
}