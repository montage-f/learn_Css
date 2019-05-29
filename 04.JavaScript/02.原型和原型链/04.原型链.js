/**
 * Created by MonTage_fz on 2019/5/29
 */
function Foo(name) {
  this.name = name;
}

Foo.prototype.printName = function () {
  console.log(this.name);
};

let f = new Foo('小芳');
f.printName();
f.toString(); // f.__proto__如果没有这个方法, 就会去f.__proto__.proto__这个方法上面去查找
