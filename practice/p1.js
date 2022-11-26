var arr = [
  { name: "syy", sum: 0 },
  { name: "wxy", sum: 18 },
  { name: "slj", sum: 8 },
  { name: "wj", sum: 20 },
];

function compare(property) {
  //property:根据什么属性排序
  return function (a, b) {
    var value1 = a[property];
    var value2 = b[property];
    /*
     * value2 - value1; ——> 降序
     * value1 - value2; ——> 升序
     */
    return value1 - value2; //升序排序
  };
}

console.log(arr.sort(compare("sum")));
