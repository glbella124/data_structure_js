// 数组去重

let arr = [55,7,7,6,84,1,6,5,1,1]

// 方法1：利用Set去重
// Es6提供了新的数据结构 Set,类似于数组, 但Set值不重复，值唯一
// Set构造函数
// let newArr = [...new Set(arr)]
// console.log(newArr);



// 方法2：利用indexOf去重
// indexOf方法可以返回某个指定的字符串在字符串中首次出现的位置
// let newArr= []
// for(let i=0; i<arr.length;i++){
//     // 如果没有找到匹配的字符串则返回-1
//     if(newArr.indexOf(arr[i]) === -1){
//         newArr.push(arr[i])        
//     }
// }
// console.log(newArr);



// 方法3：利用includes去重
// let newArr = []
// arr.forEach((v)=>{
//     if(!newArr.includes(v)){
//         newArr.push(v)
//     }
// })

// console.log(newArr);



// 方法4：利用filter去重
// let newArr = arr.filter((item,index)=>{
//     return arr.indexOf(item)=== index
// })
// console.log(newArr);



// 方法5：利用reduce去重
// prev -- 累计器累计回调的返回值
// cur -- 表示当前正在处理的数组元素
// index -- 可选，表示当前政治处理的数组元素的索引
// arr -- 可选，表示原数组
// init -- 可选，表示初始值
// arr.reduce(function(prev,cur,index,arr){
//     ...
//     }, init);

let newArr = arr.reduce((pre,cur)=>{
    // console.log(pre);
   return  pre.includes(cur)? pre: [...pre,cur]
},[])
console.log(newArr);