// --------- 1
// 利用对象字面量创建对象
// 空对象
// 1.里面的属性或者方法采取键值对的形式 -- 键：属性名；值：属性值
// 2.多个属性方法用逗号隔开
// 3.冒号后跟匿名函数
// let obj = {}
// let a = {
//     uname:"abc",
//     age:88,
//     sayHi:function(){
//         console.log("hi");
//     }
// }
// // 调用对象的属性
// console.log(a.uname);
// console.log(a['age']);
// a.sayHi()

// --------- 2
// 利用 new Object创建对象
// 常见空对象
// let obj1 = new Object()
// obj1.name ="Alice"
// obj1.age = 30
// obj1.sex = "female"
// obj1.getA = function(){
//     console.log("getA");
// }
// console.log(obj1);
// obj1.getA()

// --------- 3
// 利用构造函数创建对象
// 前面两种创建对象方式一次只能创建一个
// 构造函数：把对象里面一些相同的属性和方法抽象出来封装到函数里面
// 构造函数语法格式


// function 构造函数名(){
//     // 指定当前的 this
//     this.属性 = 值
//     this.方法 = function(){

//     }
// }
// new 构造函数名()

// 1.构造函数名字首字母要大写
// 2.构造函数不需要return 就能返回结果
// 3.调用构造函数必须使用 new
// 4.只要 new Star()就创建一个对象
function Star(name,age,sex){
    // 设置公共属性
    this.name = name
    this.age = age
    this.sex = sex
    this.reading = function(){
        console.log(`${this.name} can read books`);
    }
}
// 调用函数返回的是一个对象
let starObject = new Star("Bella",26,"female")
let myObject = new Star("Mike",22,"male")
// Star {
//     name: 'Bella',
//     age: 26,
//     sex: 'female',
//     reading: [Function (anonymous)]
//   }
console.log(starObject);
console.log(starObject); // objects
console.log(starObject.name);
console.log(starObject['sex']);
console.log(myObject.name);
myObject.reading()

