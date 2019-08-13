var tree = {
    val: 1,
    left: {
        val: 2,
        left: {
            val:4,
            left: null,
            right: null
        },
        right: {
            val:5,
            left: null,
            right: null
        }
    },
    right: {
        val: 3,
        left: {
            val:6,
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

let deepTraversal1 = (node, nodeList = []) => {

    if (node !== null) {
        nodeList.push(node);
        for (let i =0; i< node.children.length; i++) {
            deepTraversal1(node.children[i], nodeList);
        }
    } else {
        return nodeList;
    }
}



var BFS = (node, nodeList = []) => {
    let queue = []
    if (node !== null) {
        queue.push(node)
        while(queue.length) {
            let cNode = queue.shift()
            nodeList.push(cNode);
            if (cNode.left) {
                queue.push(cNode.left)
            }
            if (cNode.right) {
                queue.push(cNode.right)
            }
        }
    }
    return nodeList;
}


var leftView = (node, stack, level) => {
    if (node !== null) {
        if (level === stack.length) {
            stack.push(node);
        }
        leftView(node.left, stack, level + 1)
        leftView(node.right,stack, level + 1)
    }
}
var rightSideView = function(root) {
    let result = []
    rightView(root, result, 0)
    return result.map(item => item.value);
};

var rightView = (node, stack, level) => {
    if (node !== null) {
        debugger
        if (level === stack.length) {
            stack.push(node);
        }
        rightView(node.right,stack, level + 1)
        rightView(node.left, stack, level + 1)
    }
}
//    1
//  2  3
// 4 5 6 7
//        8

var DFS = (node, nodeList = [], stack) => {
    let queue = []
    if (node !== null) {
        queue.push(node)
        stack = 0;
        while(queue.length) {
            let cNode = queue.pop()
            nodeList.push(cNode);

            if (cNode.right) {
                queue.push(cNode.right)
            }

            if(cNode.left) {
                queue.push(cNode.left)
            }
        }
    }
    return nodeList;
}

var DFS = (node, nodeList = [], stack) => {
    let queue = []
    if (node !== null) {
        nodeList.push(node)
        node.left && DFS(node.left, nodeList)
        node.right && DFS(node.right, nodeList)
    }
    return nodeList;
}
