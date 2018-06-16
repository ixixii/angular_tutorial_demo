// 引入input,这样就可以接收父组件传递过来的数据hero了
import { Component, OnInit, Input } from '@angular/core';
// 导入 model , .ts后缀可省略
import { Girl } from '../girl';

// 获取路由path后面的id
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// 根据id从服务器获取详情
import { GirlService } from '../girl.service'


@Component({
  selector: 'app-girl-detail',
  templateUrl: './girl-detail.component.html',
  styleUrls: ['./girl-detail.component.css']
})
export class GirlDetailComponent implements OnInit {
  // 表示该属性值来自父组件
  @Input() girl: Girl;
  constructor(
  	private route: ActivatedRoute,
  	private girlService: GirlService,
  	private location: Location
  ) { }

  // 定义一个方法
  getGirl(): void {
    // + 表示转成数字  或者 -0 也可以
  	const id = +this.route.snapshot.paramMap.get('id');

  	// 必须写分号!!!
  	this.girlService.getGirl(id)
  		.subscribe(girl =>
  			this.girl = girl
  		);
  }

  // 定义一个返回的方法
  goBack(): void {
  	this.location.back();
  }

  // 在生命周期函数中,执行请求远程数据
  ngOnInit() {
  	this.getGirl();
  }

  // 保存并返回
  save(): void {
    // 必须写分号!!!
    this.girlService.updateGirl(this.girl)
      .subscribe(()=>
        // 返回上一页
        this.goBack()
      );
  }

}
