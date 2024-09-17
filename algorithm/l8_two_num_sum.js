// 链表是一种数据结构，由一系列节点（Node）组成，
// 其中每个节点包含数据和一个指向下一个节点的指针。
// 与数组不同，链表的节点在内存中不一定是连续存储的。
// 链表有很多类型，比如单向链表、双向链表和循环链表。
// 链表在插入和删除操作时效率较高，但随机访问元素的效率较低
/**
 * 两数相加
 * 迭代法，递归法
 * 有两个非空的链表，表示两个非负的整数
 * 他们每位数字都是按照逆序的方式存储的，每个节点只能存储一位数字
 * 将两数相加，并以相同形式返回一个表示和的链表
 * 可以假设除了数字0之外，这两个数都不会以0开头
 */

// 思路
// 创建一个虚拟头节点：方便我们构建结果链表。
// 遍历两个链表：逐位相加，并处理进位。
// 处理进位：如果相加后大于等于 10，则产生一个进位。
// 返回结果：最终返回构建的结果链表。

/**
 * 定义链表节点 (包括当前节点的值和指向下一个节点的指针)
 * @param {*} val
 */
// 定义链表节点
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// 主函数：迭代合并两个链表
function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0); // 创建虚拟头节点
  let current = dummy; // 当前节点指针
  let carry = 0; // 初始化进位

  // 循环处理链表节点
  while (l1 || l2 || carry) {
    // 获取当前位的值，如果链表为空则用 0
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10); // 计算进位
    current.next = new ListNode(sum % 10); // 创建新节点
    current = current.next; // 移动指针

    // 继续遍历下一个节点
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next; // 返回结果链表
}

// 辅助函数：将数组转换为链表
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// 辅助函数：打印链表
function printList(node) {
  let result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  console.log(result.join(" -> "));
}

// 示例输入：两个链表分别代表数字 [2, 4, 3] 和 [5, 6, 4]
let l1 = arrayToList([2, 4, 3]); // 代表数字 342
let l2 = arrayToList([5, 6, 4]); // 代表数字 465

// 调用函数进行两数相加
let result = addTwoNumbers(l1, l2);
console.log(result);


// 打印结果链表
printList(result); // 输出结果应该是 [7, 0, 8]，代表数字 807