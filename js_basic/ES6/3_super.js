// 除了可以调用父类的构造函数，还可以调用父类的普通函数
class People{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    intro(){
        console.log(`This is ${this.name},${this.age}`);
    }
}

// 子类在构造函数中使用super，必须放到this前面
// 必须先调用父类的构造函数，在使用子类构造方法
class Student extends People{
    constructor(name,age){
        // 传给父类
        super(name,age)
        this.name = name
        this.age = age
    }
    test(){
        console.log(`这是${this.name}`);
    }
}

let class1 = new Student('Bella',26)
class1.intro()
class1.test()
// 1. ES6类没有变量提升，所有必须先定义类，才能通过类实例化对象
// 2. 类里面的共有的属性和方法一定要加this使用