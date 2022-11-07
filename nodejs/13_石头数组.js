// A and B:(There is only one stone pair)
// time complexity and  space complexity is O(N)
// Write an array, (eg.  arr = [88,13,30,29,32,44,20]), weight difference D = 10
let arr = [88,13,30,29,32,44,20]
let weightDiffer = 10

// Create an empty map object
let arrMap = new Map()

// Loop this array, and save new element of map(item, [item + D, item - D])
arr.forEach((item,index)=>{
    arrMap.set(item,[item + weightDiffer,item - weightDiffer])
})

// Loop arrMap. If the key of arrMap equals element[0]/ element[1], print the key of arrMap
// 30,20 will be the right stone pair
arrMap.forEach((item,index)=>{
    if(arrMap.has(item[0])||arrMap.has(item[1])){
        console.log(index);
    }
})

// Note: If use nested loop, the time complexity will be O(N^2)







