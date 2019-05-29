/**
 * Created by MonTage_fz on 2019/5/29
 */
function Foo(name, age) {
  this.name = name;
  this.age = age;
  this.class = 'class-1';
}

let f1 = new Foo('小红', 12);
let f2 = new Foo('小方', 22);
console.log(f1 instanceof Foo);
