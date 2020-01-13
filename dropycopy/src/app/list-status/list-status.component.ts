import { ListStatusService } from './list-status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-status',
  templateUrl: './list-status.component.html',
  styleUrls: ['./list-status.component.css']
})
export class ListStatusComponent implements OnInit {

  listaStatus: any;
  listStatusService: ListStatusService;

  constructor( ) { 
    this.listStatusService = new ListStatusService();
    this.listaStatus = this.listStatusService.getAllStatus();
  }

  ngOnInit(){}

}
