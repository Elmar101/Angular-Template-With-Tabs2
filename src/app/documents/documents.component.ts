import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  opened:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
