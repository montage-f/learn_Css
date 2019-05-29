/**
 * Created by MonTage_fz on 2019/5/29
 */
  // 引用类型=> 函数, 数组, 对象
let a = {
    age: 1
  };
let b = a;
a.age = 2;
console.log(b.age);
