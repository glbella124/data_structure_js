// 先保留，以防需求变更, 勿删！
// if (item1.title === "所有图层" && item1.columnList.length > 0) {
//   return {
//     id: `${item1.title}_${item1.id}`,
//     label: item1.title,
//     // 镇
//     children:
//       !item1.columnList || item1.columnList.length === 0
//         ? []
//         : item1.columnList.map((item2) => {
//             this.townSelectTreeMap.set(item2.title, {
//               id: `${item2.title}_${item2.id}`,
//             });

//             return {
//               id: `${item2.title}_${item2.id}`,
//               label: item2.title,
//               // 水资源，土地资源，林地资源
//               children:
//                 !item2.columnList || item2.columnList.length === 0
//                   ? []
//                   : item2.columnList.map((item3) => {
//                       return {
//                         id: `${item3.title}_${item3.id}`,
//                         label: item3.title,
//                         tag: item3.tag,
//                         children:
//                           !item3.columnList ||
//                           item3.columnList.length === 0
//                             ? []
//                             : item3.columnList.map((item4) => {
//                                 this.rightPanelDataMap.set(
//                                   `${item4.title}_${item4.id}`,

//                                   {
//                                     id: item4.id,
//                                     mainType: item1.title,
//                                     sourceType: item3.title,
//                                   }
//                                 );

//                                 this.randomColor.set(
//                                   `${item4.title}_${item4.id}`,
//                                   publicFun.getRandomColor()
//                                 );

//                                 return {
//                                   id: `${item4.title}_${item4.id}`,
//                                   label: item4.title,
//                                   children: [],
//                                   columnId: item4.id,
//                                   townId: item2.id,
//                                   townType: item2.title,
//                                   sourceId: item3.id,
//                                   sourceType: item3.title,
//                                   mainType: item1.title,
//                                   color: publicFun.getRandomColor(),
//                                 };
//                               }),
//                       };
//                     }),
//             };
//           }),
//   };
// }
