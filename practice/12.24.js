// let data = {
//   type: "FeatureCollection",
//   features: [
//     {
//       type: "Feature",
//       properties: {},
//       geometry: {
//         type: "Polygon ",
//         coordinates: [
//           [
//             [121.80900368447004, 31.053935480315246],
//             [121.80900368447004, 31.044263490820825],
//             [121.80013337002538, 31.044263490820825],
//             [121.80013337002538, 31.053935480315246],
//             [121.80900368447004, 31.053935480315246],
//           ],
//           [
//             [121.80900368447004, 31.053935480315246],
//             [121.80900368447004, 31.044263490820825],
//             [121.80013337002538, 31.044263490820825],
//             [121.80013337002538, 31.053935480315246],
//             [121.80900368447004, 31.053935480315246],
//           ],
//         ],
//       },
//     },
//   ],
// };

// if(data.features.length>0){
//   data.features.forEach((v)=>{
//     console.log(v.geometry.coordinates);
//   })
// }

let data =
  "{'type':'FeatureCollection','features':[{'type':'Feature','properties':{},'geometry':{'type':'Polygon ','coordinates':[[[121.80900368447004,31.053935480315246],[121.80900368447004,31.044263490820825],[121.80013337002538,31.044263490820825],[121.80013337002538,31.053935480315246],[121.80900368447004,31.053935480315246]],[],[[121.80900368447004,31.053935480315246],[121.80900368447004,31.044263490820825],[121.80013337002538,31.044263490820825],[121.80013337002538,31.053935480315246],[121.80900368447004,31.053935480315246]],[],[],[]]}}]}";

console.log(data.substring(0,data.length-1));
