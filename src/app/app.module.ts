import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 表单双向绑定
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GirlsComponent } from './girls/girls.component';
import { GirlDetailComponent } from './girl-detail/girl-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service'
import { HttpClientModule } from '@angular/common/http';
import { GirlSearchComponent } from './girl-search/girl-search.component';


@NgModule({
  declarations: [
    AppComponent,
    GirlsComponent,
    GirlDetailComponent,
    MessagesComponent,
    DashboardComponent,
    GirlSearchComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    // 添加双向绑定所需要的模块
    FormsModule,
    //
    HttpClientModule,
    //
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {
        dataEncapsulation: false
      }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
