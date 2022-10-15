/**
 * fs模块是Node.js官方提供的，用来操作文件的模块
 * 提供了一系列的方法和属性，用来满足用户对文件的操作需求
 * fs.readFile(path[,options],callback),用来读取指定文件中的内容
 * 参数1：必选参数，字符串，表示文件的路径
 * 参数2：可选参数,表示以什么编码格式来读取文件
 * 参数3：必选参数，文件读取完成后，通过回调函数拿到读取的结果
 * fs.writeFile()方法，用来向指定的文件中写入内容
 */

// 以utf8的编码格式，读取指定文件的内容

// 导入fs模块，操作文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用的编码格式，一般默认指定utf8
// 参数3：回调函数，拿到读取失败和成功的结果 err, dataStr
// 调用fs.readFile()读取文件
const fs = require('fs')
fs.readFile('./files/1.txt','utf8',function(err,dataStr){
    // 若读取成功err值为null
    // 如果读取失败，err的值为错误对象，dataStr的值为undefined
    console.log(err,"打印失败的结果");
    console.log(dataStr,"打印成功的结果");
})