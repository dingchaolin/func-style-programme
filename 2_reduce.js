/**
 * Created by dcl on 2017/5/15.
 */

//reduce

let students = [
    {name: 'dcl', age: 5},
    {name: 'ys', age: 6},
    {name: 'lt', age: 7}
];

console.log( students.reduce( ( sum, student ) => sum += student.age, 0 ) );