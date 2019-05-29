/**
 * Created by MonTage_fz on 2019/5/29
 */
class People {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

class Writing extends People {
  constructor(name, age, sex) {
    super(name, age, sex);
  }

  poem(message) {
    console.log(`${this.name}-${this.age}-${this.sex}:${message}`);
  }
}

let writing = new Writing('李白', 28, '男');
writing.poem('床前明月光, 疑是地上霜, 举头望明月, 低头思故乡');
