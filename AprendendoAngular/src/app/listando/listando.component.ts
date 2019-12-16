import { Component, OnInit } from '@angular/core';

import { CursosService } from '../servicos/cursos.service';

@Component({
  selector: 'app-listando',
  templateUrl: './listando.component.html',
  styleUrls: ['./listando.component.css']
})
export class ListandoComponent implements OnInit {

	meuNome:any = "SAMUEL"
	url = "http://lorempixel.com.br/200/200"

	listaCursos:String[] = []


	constructor() {
		var cursosservice = new CursosService()
		this.listaCursos = cursosservice.getCursos()
	}

  ngOnInit() {
  }

}
