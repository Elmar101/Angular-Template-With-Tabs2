import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  opened:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
