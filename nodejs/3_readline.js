// https://blog.csdn.net/qq_44872688/article/details/122546109
// readline是Node.js里实现标准输入输出的封装好的模块，通过这个模块我们可以以逐行的方式读取数据流。
// readline 模块提供了用于从可读流（例 如 process.stdin）每次一行地读取数据的接口
const readline = require('readline')
// 创建readline接口实例

// 第一步：createInterface创建了一个接口实例
// 第二步：调用相关方法，如question方法输入
// 第三步：监听readline的close事件
// （1）在createInterface里，需要传入标准输入输出作为数据的输入输出流；
// （2）在question方法的回调函数里，可以获取到用户的输入并进行处理，同时进行了close操作来结束程序，否则程序不会结束；
// （3）在close事件的监听里，执行了process.exit(0)来使程序退出的操作，因为readline模块只要一开始获取用户输入就不会结束，必须使用这种直接的方式来结束程序。

let r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
// 使用question方法
r1.question('What kind of books do you like?',function(answer){
    console.log(`I like ${answer}`);
    // 添加close事件，不然不会结束
    r1.close()
})

// close事件监听
r1.on('close',function(){
    // 结束程序
    process.exit(0)
})