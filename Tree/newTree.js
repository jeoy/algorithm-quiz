// const {
//     newBTree
// } = require('../Tree/newTree')

const newBTree = function(list) {
    // 前序遍历的方式生成二叉树结构
    let root = {
        val: list.shift(),
        left: null,
        right: null
    };
    let stack = [root];
    while(stack && list.length) {
        cur = stack.shift();
        node = list.shift();
        if (node || node === 0) {
            cur.left = {
                val: node,
                left: null,
                right: null
            }
            stack.push(cur.left);
        }
        
        node = list.shift();
        if (node || node === 0) {
            cur.right = {
                val: node,
                left: null,
                right: null
            }
            stack.push(cur.right);
        }
    }
    return root;
}

module.exports = {
    newBTree
}