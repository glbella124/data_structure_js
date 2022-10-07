// 冒泡排序
// 一次比较两个元素，顺序错误就交换
let arr = [88,67,90,32,17,6,32,92,10]
let temp=0
// 一共需要的趟数
for(let i=0;i<arr.length-1;i++){
    // 每一趟交换次数
    for(j=0;j<arr.length-i-1;j++){
        if(arr[j]>arr[j+1]){
            temp = arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
}
console.log(arr);

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[i]>arr[j]){
//             temp = arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp    
//         }
//     }
// }
// console.log(arr);