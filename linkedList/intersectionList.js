var {header, headerB} = require('./linkedList');

console.log(headerB)
var getIntersectionNode = function(headA, headB) {
    let map = {};

    node = headA
    while (node) {
        map[node.val] = node;
        node = node.next;
    }
    console.log(map)
    node = headB
    while (node) {
        console.log('mapnode--------', map[node.val], );
        console.log( 'node========' ,node,);
        if (map[node.val] && map[node.val] === node) {
            return node.val;
        };
        node = node.next;
    }
};

// 利用两个列表都走一遍长度是相等的
var getIntersectionNode1 = function(headA, headB) {
    let l1 = headA;
    let l2 = headB;

    while(l1 !== l2) {
        l1 = (l1===null) ? headB : l1.next;
        l2 = (l2===null) ? headA : l2.next;
    }
    return l1;
};
