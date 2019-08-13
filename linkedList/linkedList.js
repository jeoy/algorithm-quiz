class linkedList {
    constructor(node) {
        this.header = node;
    }

    reverse() {
        let pre = null;
        let cur = this.header;
        console.log('reverse..')
        while(cur) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }

        return pre;
    }

    traverse() {
        let node = this.header;
        while(node) {
            console.log(node.val);
            node = node.next;
        }
    }

    reTraver() {
        let node = this.header;
        let stack = []
        while(node) {
            stack.push(node)
            node = node.next;
        }
        node = stack.pop();
        while(node) {
            console.log(node.val);
            node = stack.pop();
        }
    }

}


var commonNode = {
    val: 'c',
    next: {
        val: 'd',
        next: {
            val: 'e',
            next: null
        }
    }
}

var header = {
    val: 'a',
    next: {
        val: 'b',
        next: commonNode
    }
}


var headerB = {
    val: '55',
    next: {
        val: '44',
        next: commonNode
    }
}

var link1 = new linkedList(header);
var link2 = new linkedList(headerB);

console.log(link);
link.traverse();
