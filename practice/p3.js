// let myMap = new Map();
// myMap.set("a", 1);
// myMap.set("b", 2);
// myMap.set("c", 3);
// myMap.forEach((v)=>{
//     console.log(v);
// })

let data = [
  {
    name: "a",
    data: 111,
  },
  {
    name: "b",
    data: 222,
  },
];
data.map((v)=>[
    v.data = 888
])
console.log(data);
