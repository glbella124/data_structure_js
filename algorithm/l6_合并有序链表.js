
/**
 * 给定两个升序链表 list1 和 list2，请将这两个链表合并为一个新的升序链表并返回。
 * 新链表是通过拼接原链表中的所有节点组成的。
 */
function mergeTwoLists(list1, list2) {
    // 创建一个虚拟头节点
    let dummy = new ListNode(0);
    let current = dummy;

    // 遍历两个链表
    while (list1 !== null && list2 !== null) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // 将剩余的节点连接到新链表的末尾
    if (list1 !== null) {
        current.next = list1;
    }
    if (list2 !== null) {
        current.next = list2;
    }

    // 返回合并后的链表（跳过虚拟头节点）
    return dummy.next;
}

// 定义链表节点类
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 示例
let list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
let list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
let mergedList = mergeTwoLists(list1, list2);

// 打印合并后的链表
while (mergedList !== null) {
    console.log(mergedList.val);
    mergedList = mergedList.next;
}


// 解题思路
// 使用双指针：我们可以使用两个指针来遍历两个链表，逐个比较节点的值，将较小的节点添加到新链表中。
// 处理剩余节点：当一个链表遍历完毕后，直接将另一个链表剩余的部分连接到新链表的末尾。
// 使用虚拟头节点：为了简化合并过程，我们可以使用一个虚拟头节点来作为新链表的起始节点。

// 优化的算法
// 时间复杂度: O(n + m)，其中 n 和 m 分别是 list1 和 list2 的长度。我们需要遍历两个链表中的每个节点一次。
// 空间复杂度: O(1)，因为我们只使用了常量级的额外空间来存储指针，不包括新链表本身的空间