/**
 * Created by dcl on 2017/5/15.
 */
// 链式

let students = [
    {name: 'dcl', age: 5},
    {name: 'ys', age: 6},
    {name: 'lt', age: 7}
];

const isApproved = student => student.age > 6;
const byName = obj => obj.name;
console.log( students.filter( isApproved).map( byName ) );//[ 'lt' ]
