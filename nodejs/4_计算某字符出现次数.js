/* 描述
写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）

数据范围： 1 \le n \le 1000 \1≤n≤1000 
输入描述：
第一行输入一个由字母和数字以及空格组成的字符串，第二行输入一个字符。

输出描述：
输出输入字符串中含有该字符的个数。（不区分大小写字母） */
let readline = require('readline')
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

let arr = []
// 监听line -- 每一行输入的内容
r1.on('line',(line)=>{
    arr.push(line.toLowerCase())
})

// 监听close事件 -- 退出后输出结果
r1.on('close',()=>{
    let line1 = arr[0]
    let line2 = arr[1]
    let num = 0
    for(let i of line1){
        if(i === line2){
            num ++
        }
    }
    console.log(num);
    
})

