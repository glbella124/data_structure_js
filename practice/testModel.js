let customModelsArr = [
  {
    name: "自定义模型1",
    data: [1, 2, 3],
  },
//   {
//     name: "自定义模型2",
//     data: [4, 5, 6],
//   },
];

customModelsArr = customModelsArr.filter((v)=>{
    return v.name !=="自定义模型1"
})
console.log(customModelsArr,"customModelsArr");