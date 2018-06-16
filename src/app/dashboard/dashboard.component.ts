import { Component, OnInit } from '@angular/core';
import { Girl } from '../girl';
import { GirlService } from '../girl.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// 重点来了
export class DashboardComponent implements OnInit {
  // 成员属性
  girls: Girl[] = [];

  // 将接收的GirlService对象,变成私有属性
  constructor(private girlService: GirlService) { }

  // 定义一个方法, 来初始化
  getGirls(): void {
  	this.girlService.getGirls()
  		.subscribe(girls => {
  			// 下标0 到 下标4 , 但不包括下标4 即元素 0 1 2 3; 即前4位
  			return this.girls = girls.slice(0,4);
  		})
  }

  // 生命周期函数中调用自定义的方法,完成初始化
  ngOnInit() {
  	this.getGirls();
  }

}
