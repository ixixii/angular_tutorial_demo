import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  // 维护一个属性
  messages: string[] = [];
  // 提供一个add和一个clear方法
  add(message: string){
  	this.messages.push(message);
  }

  clear(){
  	this.messages = [];
  }
  constructor() { }
}
