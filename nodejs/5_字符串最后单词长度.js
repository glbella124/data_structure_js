// readline是Node.js里实现标准输入输出的封装好的模块，
// 通过这个模块我们可以以逐行的方式读取数据流
// 引入readline模块
const readline = require('readline');
// 创建readline接口实例
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// 事件监听
rl.on('line',(line)=>{
    const arr = line.split(' ');
    console.log(arr[arr.length-1].length)
    process.exit(0)
})