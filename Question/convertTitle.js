/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let result = '';
    console.log(1)
    while (n > 26) {
        let quo = parseInt(n / 26)
        let res = n - quo * 26;
        result += String.fromCharCode(res + 64);
        n = quo;
    }

    result += String.fromCharCode(n + 64);
    return result;
};


function toBin(num) {
    return conversion(num, 2);
}

function toExcel(num) {
    var map = n => String.fromCharCode(n + 65);
    return conversion(num, 26, map);
}

function conversion(num, n, map = n => n.toString()) {
    let result = '';
    while (num) {
        // num--;  // 只有 1 - > A 的模式需要这个
        let quo = parseInt(num / n)
        let res = num - quo * n;
        result = map(res) + result;
        num = quo;
    }
    return result;
}



function titleToNumber(s) {
    let n = 0;
    let arr = s.split('');
    function getCode(str) {
        return str.charCodeAt() - 64
    }
    for (var i = 0; i < arr.length; i++) {
        n +=getCode(arr[i]) * Math.pow(26, arr.length - i - 1);
    }
    return n;
}
