/**
 * fs.writeFile(file,data[,options],callback)
 * 参数1：必选参数，需要指定一个文件路径的字符串，表示文件的存放路径
 * 参数2：必选参数，表示要写入的内容
 * 参数3: 可选参数，表示以什么格式写入文件内容，默认值是utf8
 */

const fs = require('fs')
fs.writeFile('./files/2.txt','abcd',function(err){
    // 写入成功，err的值为null
    // 写入失败，err的值等于一个错误对象
    console.log(err);
})