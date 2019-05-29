/**
 * Created by MonTage_fz on 2019/5/29
 */

let o = {}; // 是 let o = new Object() 的语法糖
let a = []; // 是 let a = new Array() 的语法糖
function Foo() {
} // 是 let Foo = new Function()
// 使用 instanceof 判断一个函数是否是一个变量的构造函数

function F() {

}

let f = new F();
console.log(o instanceof Object);
console.log(a instanceof Array);
console.log(f instanceof F);
