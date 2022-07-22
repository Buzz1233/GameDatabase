import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public sort: string = 'name';

  constructor() { }

  ngOnInit(): void {
  }

  public tmp: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
