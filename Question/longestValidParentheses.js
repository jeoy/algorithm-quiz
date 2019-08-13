/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let arr = s.split('');
    let stack = [];
    let mark = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            stack.push({
                str: '(',
                ind: i
            });
            mark[i] = false
        } else if (arr[i] === ')') {
            if (stack.length && stack[stack.length - 1].str === '(') {
                mark[stack[stack.length - 1].ind] = true;
                mark[i] = true;
                stack.pop();
            } else {
                mark[i] = false;
            }
        } else {
            mark[i] = false;
        }
    }
    console.log(mark);
    let count = 0;
    let maxCount = 0;

    mark.forEach(item => {
        if (item) {
            count++;
        } else {
            maxCount = maxCount > count ? maxCount : count;
            count = 0;
        }
    });
    maxCount = maxCount > count ? maxCount : count;
    return maxCount;
};


console.log(longestValidParentheses("(()"));