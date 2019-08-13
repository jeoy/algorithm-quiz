const map = [
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
]

function canArrive(x, y, map) {
    let n = map.length;
    let m = map[0].length;
    let dp = [];
    dp.length = n;
    dp.fill(null);
    dp = dp.map(item => {
        let arr = [];
        arr.length = m;
        arr.fill(null)
        return arr;
    })
    console.log(1);
    search = (i, j) => {
        if (map[i][j] !== 1) {
            dp[i][j] = true;
            if (dp[i + 1] && dp[i + 1][j] === null) search(i + 1,j);
            if (dp[i - 1] && dp[i - 1][j] === null) search(i-1,j);
            if (dp[i][j + 1] === null) search(i, j+ 1);
            if (dp[i][j - 1] === null) search(i, j-1);
        } else {
            dp[i][j] = false;
        }

    }
    search(0, 0)
    return dp;
}
