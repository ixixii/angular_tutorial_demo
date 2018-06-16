// 手动建这个类的作用是: 封装InMemoryDbService
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  //
  createDb(){
    const girls = [
      {id: 1, name: '面码', age: 15},
      {id: 2, name: 'mathilda', age: 12},
      {id: 3, name: 'Saber', age: 13},
      {id: 4, name: '逢坂大河', age: 16},
      {id: 5, name: '平泽唯', age: 14}
    ]
    return { girls }
  }
}
