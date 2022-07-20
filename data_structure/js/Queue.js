// 打印机按照次序放入打印队列中
// 打印机会依次从队列中取出文档，优先放入文档优先被取出
// 开发中为了让任务可以并行处理通常会开启多个线程
// 但同时运行大量线程会占用过多资源
// 线程队列会依照次序来启动线程
// 并且处理对应任务

// JavaScript不支持多线程

// 队列常见操作
class Queue{

    array = []
    // 向队尾添加一个或多个新项
    enqueue(element){
        this.array.push(element)
    }

    // 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素
    dequeue(){
        return this.array.shift()
    }

    // 返回队列中的第一个元素 - 最先被添加，也将是最先被移除的元素 - 看一下
    // 队列不做任何改动(不移除元素，只返回元素信息，类似stack的peak)
    front(){
        if(this.isEmpty()) return null;
        return this.array[0]
    }

    // 如果队列为空，为true
    isEmpty(){
        return this.array.length === 0
    }

    // 返回队列中包含的元素个数，与数组length类似
    size(){
        return this.array.length
    }

    // 将队列中的内容，转成字符串形式
    toString(){

    }

}

export default new Queue()
