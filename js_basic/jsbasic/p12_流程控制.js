// 案例1:接收用户输入的年份，如果是闰年就输入出闰年，否则输出平年
// 算法 -- 闰年,能被4整除且不能整除100的;能够被400整除的
// let year = 2019;
// if ((year % 4 == 0 && year % 4 != 0) || year % 400 == 0) {
//   console.log("这是闰年");
// } else {
//   console.log("这是平年");
// }

// 案例2:接收用户输入的分数，根据分数输出对应的等级字母A,B,C,D,E
// 思路：按照从大到小的思路写
// let score = 8;
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else {
//   console.log("E");
// }

// 案例3： 数字补0
// 用户输入0 ~ 59 之间的一个数字
// 如果数字小于10，则在这个数字前面补0,否则不做操作
// 用一个变量接受这个返回值
// let time = 9;
// let result = time < 10 ? "0" + time : time;
// console.log(result);

// 案例4: 求学生成绩
// 求班级总成绩，平均成绩
// let arr = [
//   {
//     name: "Alice",
//     score: 90,
//   },
//   {
//     name: "Bella",
//     score: 88,
//   },
//   {
//     name: "Linda",
//     score: 95,
//   },
// ];
// let sum = 0;
// let ave = 0;
// for (let i in arr) {
//   // console.log(arr[i].score);
//   sum += arr[i].score;
// }
// ave = sum / arr.length;
// console.log(sum);
// console.log(ave);

// 案例4：一行打印5颗星星
// let str = "";
// for(let i=0;i<5;i++){
//     str+="★ "
// }
// console.log(str);

// 案例5: 打印五行五列的星星
// let str = "";
// for (let i = 1; i <= 5; i++) {
//   // 外层循环负责打印五行

//   // 里层循环负责打印每一行
//   for (let j = 1; j <= 5; j++) {
//     str += "★ ";
//   }
//   str += "\n";
// }

// console.log(str);

// 案例6: 打印倒三角形
// let str = ""
// for(let i=0;i<10;i++){
//     for(let j=i;j<10;j++){
//         str += "★ ";
//     }
//     str+="\n"
// }
// console.log(str);

// 案例7: 打印正三角形
// let str = "";
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j <= i; j++) {
//     str += "★ ";
//   }
//   str += "\n";
// }
// console.log(str);

// 案例8: 九九乘法表
// let str = "";
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += `${j}x${i}=${i * j} `;
//   }
//   str += "\n";
// }
// console.log(str);

// 案例9: 打印人的一生
// let i = 1;
// while (i <= 100) {
//   console.log(i++);
// }

// 案例10: 计算1——100之间所有整数的和
// let n = 0;
// let sum = 0;
// while (n <= 100) {
//   sum += n;
//   n++;
// }
// console.log(sum);

// 案例11：do-while -- 求1 —— 100之间整数的和
// let m = 0;
// let sum = 0
// do{
//     sum+=m
//     m++

// }while(m<=100)
// console.log(sum);

// 案例12: 求1~100之间，除了能被7整除之外的整数和
let sum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 7 == 0) {
    continue;
  }
  sum += i;
}
console.log(sum);
