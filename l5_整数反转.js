/**
 * @param {number} x
 * @return {number}
 */
 let reverse = function (x) {
    if (x === 0) return 0

    let reverseNum = 0
    if (x < 0) {
        x = Math.abs(x)
        while (x > 0) {
            reverseNum = reverseNum * 10 + x % 10
            x = Math.floor(x / 10)
        }
        if(-reverseNum < Math.pow(-2,31)|| -reverseNum>Math.pow(2,31)-1){
            return 0
        }
        return -reverseNum
    }

    if (x > 0) {
        while (x > 0) {
            reverseNum = reverseNum * 10 + x % 10
            x = Math.floor(x / 10)
        }
        if(reverseNum < Math.pow(-2,31)|| reverseNum>Math.pow(2,31)-1){
            return 0
        }
        return reverseNum
    }




};

