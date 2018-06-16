import { Injectable } from '@angular/core';
// rxjs 异步变同步
import { Observable, of } from 'rxjs'
//
import { MessageService } from './message.service'

//
import { catchError, map, tap } from 'rxjs/operators';

// 导入model
import { Girl } from './girl'
// 导入数组
import { GIRLS } from './mock-girls'

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GirlService {
  // 构造函数, 自动生成一个私有的属性,并接收来自外部传递过来的MessageService
  constructor(
      private messageService: MessageService,
      private http: HttpClient
      ) {
  	// do nothing
  }

  // 私有
  private log(message: string) {
    this.messageService.add('GirlService: ' + message )
  }

  // 接口地址
  private girlsUrl = 'api/girls'

  // 提供数据源,异步变同步
  getGirls(): Observable<Girl[]> {
    // 当服务器返回数据回来时,提示一下
    // this.messageService.add('服务器返回数据了')
  	// 使用of
  	// return of(GIRLS);

    // 分号不能少
    return this.http.get<Girl[]>(this.girlsUrl).pipe(
      tap(girls =>
        this.log(`fetched girls`)
      ),
      catchError(this.handleError('getGirls',[]))
    );
  }

  // 提供一个根据ID获取girl的方法
  // getGirl(id: number): Observable<Girl> {
  // 	// 注意: 消息的及时通知
  // 	this.messageService.add(`GirlService: fetched girl id = ${id}`);
  // 	// 使用of
  // 	return of(GIRLS.find(girl =>
  // 		girl.id === id
  // 	))
  // }

  getGirl(id: number): Observable<Girl> {
    const url = `${this.girlsUrl}/${id}`
    return this.http.get<Girl>(url).pipe(
      tap(_ =>
        this.log(`fetched girl id=${id}`)
      ),
      catchError(this.handleError<Girl>(`getGirl id=${id}`))
    )
  }





  // 错误处理方法
  private handleError<T> (operation = 'operation', result? : T) {
    return (error: any): Observable<T> => {
      console.log(error)
      this.log(`${operation} failed: ${error.message}`)
      return of(result as T)
    }
  }

  // 保存
  updateGirl (girl: Girl): Observable<any> {
    // 请求头
    const httpOption = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this.http.put(this.girlsUrl,girl,httpOption)
      .pipe(
        tap(_ =>
          this.log(`update girl id=${girl.id}`)
        ),
        catchError(this.handleError<any>('updateGirl'))
      )
  }

  // 新增一个girl
  addGirl(girl: Girl): Observable<Girl> {
    // 虽然没有,但还是要写
    const httpOptions = {

    }

    // 千万记得加分号
    return this.http.post<Girl>(this.girlsUrl,girl,httpOptions).pipe(
      tap( (girl: Girl) =>
          this.log(`added Girl id=${girl.id}`)
      ),
      catchError(this.handleError<Girl>(`add Girl`))
    );
  }

  // 删除一个 girl
  deleteGirl(girl: Girl | number): Observable<Girl> {
    const id = typeof girl === 'number' ? girl : girl.id
    const url = `${this.girlsUrl}/${id}`
    // 虽然没有内容,但是还是要写
    const httpOptions = {

    }
    // 记得加分号
    return this.http.delete<Girl>(url,httpOptions).pipe(
      tap(_ =>
        this.log(`delete girl id=${id}`)
      ),
      catchError(this.handleError<Girl>('deleteGirl'))
    );
  }

  // 查询
  searchGirls(term: string): Observable<Girl[]> {
    console.log(term)
    if(!term.trim()){
      return of([])
    }

    let url = `${this.girlsUrl}/?name=${term}`

    // 千万不要忘记写分号
    return this.http.get<Girl[]>(url).pipe(
      tap(_ => {
        this.log(`found girls matching "${term}"`)
      }),
      catchError(this.handleError<Girl[]>('searchGirls',[]))
    );
  }
}
