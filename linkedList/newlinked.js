// const {
//     Linklist,
//     print
// } = require('../linkedList/newlinked')
function Linklist(arr, pos) {
    function Node(val) {
        return {
            val,
            next: null
        };
    }
    let header = null;
    let curNode = null;
    let interNode = null;
    arr.forEach((item, ind) => {
        let node = Node(item);
        if (ind === pos) {
            interNode = node;
        }
        if (curNode) {
            curNode.next = node;
        } else {
            header = node;
        }
        curNode = node;
    });
    curNode.next = interNode;

    return header;
}

function print(header) {
    cur = header;
    while(cur) {
        console.log(cur.val);
        cur = cur.next;
    }
}

var obja = {
    a: 123
}

module.exports = {
    Linklist,
    print,
    obja
};