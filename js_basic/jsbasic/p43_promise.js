// promise是异步编程的一种解决方案
// 可以把异步操作最终的成功返回值或者失败原因和响应的处理程序关联起来
// Promise 是一个语法糖,用 new Promise的方式去调用 



p.then(res=>{
    console.log(res);
},err=>{
    console.log(err);
})


// new Promise(fn)
// Promise中的状态使用resolve和reject两个函数改变状态，并且状态不可逆


// promise构造函数
// 接收一个函数类型的参数，接收两个参数
// 实现基本逻辑
// resolve 和 reject，分别对应成功时的回调和失败时的回调

let p = new Promise((resolve, reject)=>{
    console.log(123);
})

// promise三种状态 pending(等待), Fulfilled(成功),rejected(失败)
// 由 pending变成 fufilled,或者由pending变成 rejected

// promise三个实例方法
// then => then的执行依赖上一步的结果 
// => then接收两个参数，分别对应成功时的回调和失败时的回调


// catch => reject,捕获执行resolve时的异常
// finally