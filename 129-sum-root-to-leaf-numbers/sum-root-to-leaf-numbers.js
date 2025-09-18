/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0
    const sumFromRootToLeaf = (node, num_str) => {
        if (node === null) return
        num_str += node.val
        if (node.left === null && node.right === null) {
            sum += Number(num_str)
            return
        }
        sumFromRootToLeaf(node.left, num_str)
        sumFromRootToLeaf(node.right, num_str)        
    }
    sumFromRootToLeaf(root, '')
    return sum
};