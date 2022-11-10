let nums = [3,2,4]
let target = 6;

// twoSum(nums, target);
let twoSum = function(nums,target){
    const map =  new Map()
    nums.forEach((v,i)=>{
        if(map.has(v)){
            // 哈希表中有target-v和v，返回两数的index
            console.log([map.get(v),i]);
        }
        map.set(target-v,i)
    })
    console.log(map);
}
twoSum(nums,target)