/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.root = root;
    this.LDRarr = LDR(this.root);
    this.p = 0;
};

function LDR (root) {
    let arr = [];
    var dfs = (node) => {
        node.left && dfs(node.left);
        arr.push(node);
        node.right && dfs(node.right);
    }
    dfs(root);
    return arr;
}

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.p++;
    return this.LDRarr[this.p].val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.LDRarr[this.p + 1] === true;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
