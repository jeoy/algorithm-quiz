  //       3
  //   1        5
  // null  2  4   7
  //               8
var BST = {
    val: 3,
    left: {
        val: 1,
        left: null,
        right: {
            val:2,
            left: null,
            right: null
        }
    },
    right: {
        val: 5,
        left: {
            val:4,
            left: null,
            right: null
        },
        right: {
            val:7,
            left: null,
            right: {
                val:8,
                left: null,
                right: null
            }
        }
    }
}

function LDR (root) {
    let arr = [];
    var dfs = (node) => {
        node.left && dfs(node.left);
        arr.push(node.val);
        node.right && dfs(node.right);
    }
    dfs(root);
    console.log('LDR', arr);
    return arr;
}

function LDR2 (root) {
    let arr = [];
    let stack = [];
    let cur = root;
    while(stack.length || cur !== null) {
        if (cur !== null) {
            stack.push(cur);
            cur = cur.left;
        } else {
            cur = stack.pop();
            console.log(cur.val);
            cur = cur.right;
        }

    }
    return arr;
}

function DLR (root) {
    let arr = [];
    var dfs = (node) => {
        arr.push(node.val);
        node.left && dfs(node.left);
        node.right && dfs(node.right);
    }
    dfs(root);
    console.log('DLR', arr);
    return arr;
}

function LRD (root) {
    let arr = [];
    var dfs = (node) => {
        node.left && dfs(node.left);
        node.right && dfs(node.right);
        arr.push(node.val);
    }
    dfs(root);
    console.log('LRD', arr);
    return arr;
}
LDR(BST)
LDR2(BST);
