let checkedList = ["河道数据_76", "水域数据_75","永久基本农田_89"];
let testStr = checkedList.join(",")
console.log(testStr);

let layerAuthorityMap = new Map()
layerAuthorityMap.set("河道数据_76","有权限")
layerAuthorityMap.set("水域数据_75","有权限")
layerAuthorityMap.set("永久基本农田_89","有权限")

let newData = checkedList.filter((v)=>{
    if(layerAuthorityMap.has(v) && layerAuthorityMap.get(v)==="有权限"){
        return v
    }
})
// console.log(newData);