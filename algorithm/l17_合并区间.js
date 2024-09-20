/**
 * 合并区间
 * 数组intervals表示若干个区间的集合，其中单个区间为intervals[i] = [starti, endi]
 * 合并所有重叠的区间，并返回一个不重叠的区间数组
 * 该数组需恰好覆盖输入中的所有区间
 *
 * 重叠区间：[a1,b1],[a2,b2] 当且仅当a1<=b2 && a2 <= b1
 *
 * 算法实现：排序和合并区间
 */
function merge(intervals) {
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  //   获取排序后数组的第一个区间
  const merged = [intervals[0]];
  for (i = 0; i < intervals.length; i++) {
    // 当前区间
    const [currentStart, currentEnd] = intervals[i];
    // 需要比较的区间
    const [lastStart,lastEnd] = merged[merged.length-1]
    // 如果当前区间和上一个区间重叠，直接进行合并
    if(currentStart<=lastEnd){
        merged[merged.length-1] = [lastStart,Math.max(lastEnd,currentEnd)]
    }else{
        // 否则直接添加当前区间
        merged.push([currentStart,currentEnd])
    }
  }
  return merged
}

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

// 时间复杂度: O(n log n)，由于排序过程主导了时间复杂度。
// 排序的时间复杂度: 按区间的起点排序需要 O(n log n) 的时间，其中 n 是区间的数量。
// 合并的时间复杂度: 线性扫描所有区间的时间复杂度是 O(n)，因为我们只遍历了每个区间一次。


// 空间复杂度: O(n)，最坏情况下存储结果数组需要额外的线性空间。