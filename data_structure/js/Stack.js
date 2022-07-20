// 自助餐厅盘子堆放

// 创建一个Stack构造函数，用户创建栈的类
// 在构造函数中定义一个变量，这个变量可以用于保存当前栈对象中所有的对象
// 十进制转二进制
// decToBinary
// 向下取整
// Math.floor()
class Stack {
    
    array = []

    // 添加一个新元素到栈顶位置

    push(element){
        this.array.push(element)
    }

    // 移除栈顶的元素，同时返回移除的元素

    pop(){
        return this.array.pop()
    }

    // 返回栈顶的元素，不修改栈

    peak(){
        return this.array[this.array.length-1]
    }

    // 返回栈里元素个数

    size(){
        return this.array.length
    }

    // 如果没有任何元素，返回false

    isEmpty(){
        return this.array.length === 0
    }
}

export default new Stack()