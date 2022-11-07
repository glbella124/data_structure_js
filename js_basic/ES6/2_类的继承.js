class Father{
    constructor(x,y){
        this.x = x
        this.y = y
    }
    sum(){
        // this -- 指向父类数据
        console.log(this.x + this.y);
    }
}

// super关键字用于访问和调用对象父类上的函数，
// 可以调用父类的构造函数，也可以调用父类的普通函数
class Son extends Father{
    constructor(x,y){
        // 调用了父类中的构造函数constructor
        super(x,y)
    }
}

// 指向子类
// 实例化子类，super传给了父类constructor
let mySon = new Son(3,4)
mySon.sum()