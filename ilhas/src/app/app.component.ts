import { ImagemComponent } from './imagem/imagem.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  n = 10;
  mapa :Campo[][] = [];
  valorAtual = 2;
  listaConexa = []

  constructor(){
    for (let i = 0; i < this.n; i++) {
      this.mapa.push([]);
      for (let j = 0; j < this.n; j++) {
        this.mapa[i].push( <Campo>{Valor:0, Atingido:false} )
      }
    }

    this.mapa[3][3].Valor = 1
    this.mapa[3][4].Valor = 1
    this.mapa[3][5].Valor = 1
    this.mapa[2][3].Valor = 1
    this.mapa[2][4].Valor = 1

    this.mapa[6][3].Valor = 1
    this.mapa[6][4].Valor = 1
    this.mapa[6][5].Valor = 1
    this.mapa[7][3].Valor = 1

    this.mapa[7][7].Valor = 1

    this.mapa[0][0].Valor = 1
    this.mapa[1][0].Valor = 1
    this.mapa[2][0].Valor = 1
    this.mapa[3][0].Valor = 1
    this.mapa[4][0].Valor = 1
    this.mapa[5][0].Valor = 1
    this.mapa[6][0].Valor = 1
    this.mapa[7][0].Valor = 1
    this.mapa[8][0].Valor = 1
    this.mapa[9][0].Valor = 1
    this.mapa[9][1].Valor = 1
    this.mapa[9][2].Valor = 1
    this.mapa[9][3].Valor = 1
    this.mapa[9][4].Valor = 1
    this.mapa[9][5].Valor = 1
    this.mapa[9][6].Valor = 1
    this.mapa[9][7].Valor = 1
    this.mapa[9][8].Valor = 1
    this.mapa[9][9].Valor = 1
    this.mapa[8][9].Valor = 1
    this.mapa[7][9].Valor = 1
    this.mapa[6][9].Valor = 1
    this.mapa[5][9].Valor = 1
    this.mapa[4][9].Valor = 1
    this.mapa[3][9].Valor = 1
    this.mapa[2][9].Valor = 1
    this.mapa[1][9].Valor = 1
    this.mapa[0][9].Valor = 1

    for(let i=0; i<this.n; i++){
      for(let j=0; j<this.n; j++){
        let campo = this.mapa[i][j]
        if(campo.Valor != 0){
          if(!campo.Atingido){
            this.mapa[i][j].Atingido = true
            this.mapa[i][j].Valor = this.valorAtual
            this.listaConexa.push( [i,j] )
            while(this.listaConexa.length != 0){
              let escolhido = this.listaConexa.pop()
              if(escolhido[0]+1 < this.n){
                if( this.mapa[escolhido[0]+1][escolhido[1]].Valor!=0 &&  !this.mapa[escolhido[0]+1][escolhido[1]].Atingido ){
                  this.mapa[escolhido[0]+1][escolhido[1]].Valor = this.valorAtual
                  this.mapa[escolhido[0]+1][escolhido[1]].Atingido = true
                  this.listaConexa.push( [escolhido[0]+1, escolhido[1]] )
                }
              }
              if(escolhido[0]-1 >= 0){
                if( this.mapa[escolhido[0]-1][escolhido[1]].Valor!=0 &&  !this.mapa[escolhido[0]-1][escolhido[1]].Atingido ){
                  this.mapa[escolhido[0]-1][escolhido[1]].Valor = this.valorAtual
                  this.mapa[escolhido[0]-1][escolhido[1]].Atingido = true
                  this.listaConexa.push( [escolhido[0]-1, escolhido[1]] )
                }
              }

              if(escolhido[1]+1 < this.n){
                if( this.mapa[escolhido[0]][escolhido[1]+1].Valor!=0 &&  !this.mapa[escolhido[0]][escolhido[1]+1].Atingido ){
                  this.mapa[escolhido[0]][escolhido[1]+1].Valor = this.valorAtual
                  this.mapa[escolhido[0]][escolhido[1]+1].Atingido = true
                  this.listaConexa.push( [escolhido[0], escolhido[1]+1] )
                }
              }
              if(escolhido[1]-1 >= 0){
                if( this.mapa[escolhido[0]][escolhido[1]-1].Valor!=0 &&  !this.mapa[escolhido[0]][escolhido[1]-1].Atingido ){
                  this.mapa[escolhido[0]][escolhido[1]-1].Valor = this.valorAtual
                  this.mapa[escolhido[0]][escolhido[1]-1].Atingido = true
                  this.listaConexa.push( [escolhido[0], escolhido[1]-1] )
                }
              }
            }
            this.valorAtual = this.valorAtual + 1
          }
        }
      }
    }
  }



}

class Campo{
  Valor: number;
  Atingido: boolean;
};