/**
 * 坐标反转
 * @param  {[type]} latlngsAry [description]
 * @return {[type]}            [description]
 */

// let data = [
//   [
//     [
//       [121.6496, 31.1635],
//       [121.6496, 31.1635],
//       [121.6496, 31.1636],
//       [121.6496, 31.1636],
//       [121.6496, 31.1635],
//     ],
//   ],
//   [
//     [
//       [121.6496, 31.1631],
//       [121.6496, 31.1631],
//       [121.6496, 31.1631],
//       [121.6496, 31.1631],
//       [121.6496, 31.1631],
//     ],
//   ],
// ];
let data = [
  [
    [
      [121.6319, 31.1237, 0.0],
      [121.6317, 31.1241, 0.0],
      [121.6318, 31.1239, 0.0],
      [121.6319, 31.1237, 0.0],
    ],
  ],
  [
    [
      [121.6321, 31.1231, 0.0],
      [121.632, 31.1235, 0.0],
      [121.632, 31.1233, 0.0],
      [121.6321, 31.1231, 0.0],
    ],
  ],
  [
    [
      [121.6321, 31.1229, 0.0],
      [121.6321, 31.1231, 0.0],
      [121.6321, 31.123, 0.0],
      [121.6321, 31.1229, 0.0],
    ],
  ],
];

/**
 * 如果最底层坐标数组有三个值，移除最后一位再反转
 * @param {} latlngsAry 
 * @returns 
 */
function latLngsToReverse(latlngsAry) {
  // 深拷贝
  var tempLatlngsAry = JSON.parse(JSON.stringify(latlngsAry));
  if (typeof tempLatlngsAry[0] === "number") {
    if(tempLatlngsAry.length<3 && tempLatlngsAry.length>0){
      return tempLatlngsAry.reverse();
    }
    if(tempLatlngsAry.length===3){
      tempLatlngsAry = tempLatlngsAry.slice(0,2)
      return tempLatlngsAry.reverse();
    }

  } else {
    for (var i = 0, l = tempLatlngsAry.length; i < l; i++) {
      tempLatlngsAry[i] = latLngsToReverse(tempLatlngsAry[i]);
    }
  }
  return tempLatlngsAry;
}

let finalData = latLngsToReverse(data);
console.log(finalData[0][0]);
