/**
 * 写出一个程序，接受一个正浮点数值，输出该数值的近似整数值。如果小数点后数值大于等于 0.5 ,向上取整；小于 0.5 ，则向下取整。
 * 输入 -- 输入一个正浮点数值
 * 输出 -- 输出该数值的近似整数值
 */
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.on('line',function(line){
    let a = parseFloat(line)
    let b = Math.round(a)
    console.log(b);
    process.exit(0)
})


