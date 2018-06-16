// .ts后缀可以省略
import { Girl } from './girl'

// ts语法  : 左边为常量名称
// : 右边为数组([]左边指定数组内元素的类型)
export const GIRLS: Girl[] = [
	{id: 1, name: '面码', age: 15},
	{id: 2, name: 'mathilda', age: 12},
	{id: 3, name: 'Saber', age: 13},
	{id: 4, name: '逢坂大河', age: 16},
	{id: 5, name: '平泽唯', age: 14},
];
