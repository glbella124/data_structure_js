// 1. 声明提升 -- 先上车后买票
console.log(name);//undefined
var name = 'a'

//2.没有局部作用域 -- 红杏出墙
function fn2(){
    for(var i =0;i<5;i++){

    }
    console.log(i);
}
fn2()

//3.声明覆盖
var name2 = "a"
var name2 = "b"
console.log(name2);