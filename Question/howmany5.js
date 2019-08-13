// 给定一个整数 n，返回 n! 结果尾数中零的数量。
//
// 示例 1:
//
// 输入: 3
// 输出: 0
// 解释: 3! = 6, 尾数中没有零。
// 示例 2:
//
// 输入: 5
// 输出: 1
// 解释: 5! = 120, 尾数中有 1 个零.

// 15  3    5  5*2 5*3
// 20  4   5  5*2 5*3  4
// 25  6   1  2 3 4 55
// 30  7




/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res = 0;
    let i = 1;
    while(true) {
        let base = 5**i;
        if (base > n) {
            break;
        } else {
            res += parseInt(n/base);
        }
        i++;
    }
    return res;
};


trailingZeroes(31)