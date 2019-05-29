/**
 * Created by MonTage_fz on 2019/5/29
 */

// 所有的引用类型(数组, 对象, 函数), 都具有对象特性, 即可自由拓展属性(除了 null 之外)
// 所有的引用类型(数组, 对象, 函数), 都有一个__proto__属性(隐式原型), 属性值是一个普通的对象
// 所有的函数, 都有一个prototype属性(显示原型), 属性值是一个普通的对象
// 所有的引用类型(数组, 对象, 函数), __proto__属性值指向它的构造函数的 prototype 属性值
// 当试图得到一个对象的某个属性时, 如果这个对象本身没有这个属性, 那么会去它的__proto__(即它的构造函数的prototype)中寻找

let o = {};
console.log(o.__proto__ === Object.prototype);

let a = [];
console.log(a.__proto__ === Array.prototype);

function F(name) {
  this.name = name;
}

F.prototype.sayName = function () {
  console.log(this.name);
};

let f = new F('小芳');
f.sayName();

console.log(f.__proto__ === F.prototype);
console.log(F.__proto__ === Function.prototype);

for (let i in f) {
  // for in 循环会去查找f原型上面的属性, 那么可用hasOwnProperty()
  console.log(i, '包括原型的属性');
  if (f.hasOwnProperty(i)) {
    console.log(i, '自己的属性');
  }
}


