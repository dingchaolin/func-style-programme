/**
 * Created by dcl on 2017/5/15.
 * 纯函数式编程
 */

//非纯净的
let number = 1;

const increment = () => number += 1;

console.log("非纯净的===", increment() );

//纯净的
const increment_pure = n => n + 1;

console.log("纯净的===", increment_pure(1) );

/*
纯函数式和非纯函数式的区别
纯函数式函数中运行时使用的数据是通过函数参数传入的，而非是外部的全局变量
 */


