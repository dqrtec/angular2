import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListStatusService {

  constructor() { }

  getAllStatus(){
    return [
      {id:1, nome:"server 1", status:true},{id:2, nome:"server 2", status:false},{id:3, nome:"server 3", status:true}
    ]
  }
}
