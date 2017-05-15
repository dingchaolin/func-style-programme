/**
 * Created by dcl on 2017/5/15.
 */
// 高阶函数-函数把其他函数当做参数传递使用或者返回一个函数

//1 加法
const sum = (x, y) => x + y;
const calculate = ( fn, x, y ) => fn( x, y );
console.log( calculate( sum, 2, 3) ); // 5

//2 filter
let students = [
    {name: 'dcl', age: 5},
    {name: 'ys', age: 6},
    {name: 'lt', age: 7}
];

const isApproved = student => student.age > 6;
console.log( students.filter( isApproved ) );//[ { name: 'lt', age: 7 } ]




