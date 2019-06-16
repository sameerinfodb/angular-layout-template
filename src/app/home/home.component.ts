import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  a = 0.259;
  b = 10000000.1230131;

  constructor() {}

  ngOnInit() {}
}
