import {Component, OnInit} from '@angular/core';
// 先导入上级目录的     .ts后缀可省
import {Girl} from '../girl';
// 数组 由service 提供
import {GirlService} from '../girl.service';


@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})

export class GirlsComponent implements OnInit {
  // 数据源为一个空数组
  girls: Girl[];


  // 用户点击的girl,默认为空 (已弃用)
  // selectedGirl: Girl;

  // 绑定事件, 参数名是girl, 类型是Girl, 返回值是void
  // (已弃用)
  // onSelectFunction(girl: Girl) : void {
  // this 关键字
  // this.selectedGirl = girl;
  // console.log('点击了')
  // }

  // 给构造函数加个参数
  constructor(private girlService: GirlService) {
  }

  // 提供一个函数 返回值是void
  getGirls(): void {
    // 异步请求结果(类似Promise.then)
    this.girlService.getGirls().subscribe(girls =>
      this.girls = girls
    );
  }

  // 添加一个girl
  add(name: string): void {
    name = name.trim();
    const age = Math.floor(Math.random()*3) + 11
    // 输入为空,直接返回
    if (!name) {
      return;
    }
    // 结尾要加分号
    // 这是什么语法
    this.girlService.addGirl(
      {name,age} as Girl
    ).subscribe(girl => {
      this.girls.push(girl);
    });
  }

  // 删除一个girl
  delete(girl: Girl): void {
    this.girls = this.girls.filter(g => g !== girl);
    this.girlService.deleteGirl(girl).subscribe( ()=>
      console.log('删除成功')
    );
  }

  ngOnInit() {
    console.log('ngOnInit');
    // 这儿才进行数据的初始化
    this.getGirls();

  }

}
