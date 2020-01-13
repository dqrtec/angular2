import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  @Input() dado: any;
  open = false;

  constructor() { }

  ngOnInit() {}

  public openBody() {
    this.open = !this.open;
  }

  public valor() {
    this.dado.status = !this.dado.status;
  }
}
