// 一个函数对周围状态的引用捆绑在一起，
// 内层函数中访问到其外层函数的作用域
function outer(){
    const a = 1
    function f(){
        console.log(a);
    }
}

// return不一定
// 内存泄漏不一定
function outer(){
    let a = 10
    return function(){
        console.log(a);
    }
}

// 闭包，让变量私有化，
// 函数外部可以使用但是无法修改