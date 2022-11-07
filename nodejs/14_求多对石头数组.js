// weight difference = 10
let arr = [88, 50, 52, 78, 13, 60];
let weightDiffer = 10;

// Get all stone pairs
function getStonePairs(arr) {
  let arrMap = new Map();

  arr.forEach((item) => {
    arrMap.set(item, item);
  });

  arrMap.forEach((item, index) => {
    if (arrMap.has(index + weightDiffer)) {
      console.log(`stone pair:${index + weightDiffer},${index}`);
    }
  });
}

getStonePairs(arr);

// result
// stone pair:60,50
// stone pair:88,78
