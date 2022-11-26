/**
 * 公共函数库
 */
//随机id生成
const buildGuid = function(options) {
    var text = "";
    var mar = options || 'default';
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 18; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
    return mar + '_' + (new Date()).getTime().toString() + text;
}

/**
 * 根据数组属性排序 
 */
 const compare = function (property) {//property:根据什么属性排序
  return function(a,b){
   var value1 = a[property];
   var value2 = b[property];
   /*
   * value2 - value1; ——> 降序
   * value1 - value2; ——> 升序
   */
   return value1 - value2;//升序排序
  }
 }
  

export default {
  buildGuid,
  compare
}