import { Component, OnInit } from '@angular/core';
// 导入MessageService
import { MessageService } from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  // 貌似private也可以, 组件模板要用到消息列表
  constructor(public messageService : MessageService) { }

  ngOnInit() {
  }

}
