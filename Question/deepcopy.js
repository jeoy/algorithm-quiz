obj = {
    a: 1,
    b: {
        c: {
            d: 1
        }
    },
    arr: [{
        bb: 1
    }, {
        cc: 2
    }]
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var deepCopyDFS = function (obj) {
    let res;

    function traverse(ori) {
        let tar;
        if (Array.isArray(ori)) {
            tar = [];
            for (let item in ori) {
                console.log(item)
                tar[item] = traverse(ori[item])
            }
        } else if (typeof ori === 'object') {
            tar = {};
            for (let item in ori) {
                tar[item] = traverse(ori[item])
            }
        } else {
            tar = ori;
        }
        return tar;
    }

    res = traverse(obj);
    return res;
};

console.log(JSON.stringify(deepCopyDFS(obj)));


var deepCopyBFS = function (obj) {
    let queue = [obj];
    let res = {};
    let target = [res];
    while (queue.length) {
        ori = queue.shift();
        tar = target.shift();
        for (let item in ori) {
            if (Array.isArray(ori[item])) {
                console.log(item)
                tar[item] = [];
                target.push(tar[item])
                queue.push(ori[item]);
            } else if (typeof ori[item] === 'object') {
                tar[item] = {};
                target.push(tar[item])
                queue.push(ori[item]);
            } else {
                tar[item] = ori[item];
            }
        }
    }
    console.log('123', res.b.c === obj.b.c);
    return res;
};


var deepCopyDFS2 = function (obj) {
    let target = {};
    let tarStack = [target];
    let stack = [obj];
    while (stack.length) {
        let curItem = stack.pop();
        let curTar = tarStack.pop();
        for (let item in curItem) {
            if (Array.isArray(curItem[item])) {
                console.log(item)
                curTar[item] = [];
                tarStack.push(curTar[item])
                stack.push(curItem[item]);
            } else if (typeof curItem[item] === 'object') {
                curTar[item] = {};
                tarStack.push(curTar[item])
                stack.push(curItem[item]);
            } else {
                curTar[item] = curItem[item];
            }
        }
    }
    console.log('test', target.b.c === obj.b.c);
    return target;
}


console.log(JSON.stringify(deepCopyDFS2(obj)));
