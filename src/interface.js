import React from 'react';
import './interface.css';

const code1 = `
    class Solution {
        int sum = 0;

        public TreeNode bstToGst(TreeNode root) {
            if (root == null){
                return null;
            }

            bstToGst(root.right);

            int curr = root.val;
            root.val += sum;
            sum += curr;

            bstToGst(root.left);

            return root;
        }
}
`;

const algo1 = `
Base Case: If the current node (root) is null, return null, as there is no tree to transform.

Traverse Right Subtree: Recursively call bstToGst on the right subtree (root.right). This step ensures that we traverse the tree in a descending order (right, root, left).

Update Current Node: Calculate the current value (curr) of the node and update the node's value by adding the cumulative sum (sum) to it. Update the cumulative sum (sum) by adding the original value of the current node.

Traverse Left Subtree: Recursively call bstToGst on the left subtree (root.left). This step continues the descending order traversal.
Return Root:

Return the modified root node.
`;

const code2 = `
    class Solution {
        private int maxSum;
        
        public int maxSumHelper(TreeNode root) {
            
            if (root == null) return 0; 
            
            int leftMax = maxSumHelper(root.left);
            int rightMax = maxSumHelper(root.right);

            int maxRightLeft = Math.max(leftMax, rightMax);
            int maxOneNodeRoot = Math.max(root.val, (root.val + maxRightLeft));
            int maxAll = Math.max(maxOneNodeRoot, leftMax + rightMax + root.val);
            
            maxSum = Math.max(maxSum, maxAll);
            
            return maxOneNodeRoot;
        }

        public int maxPathSum(TreeNode root) {
            maxSum = Integer.MIN_VALUE;
            maxSumHelper(root);
            return maxSum;
        }
    }
`;

const algo2 = `
Initialize Maximum Sum Variable: Declare a private variable maxSum to keep track of the maximum path sum. Initialize it to Integer.MIN_VALUE.

Define Recursive Helper Function: maxSumHelper - The function takes a TreeNode as an argument and returns the maximum sum of a path starting from the current node to one of its descendants.

Base Case: If the current node (root) is null, return 0 (indicating an empty path).

Recursive Calls: Recursively call maxSumHelper on the left and right subtrees to get the maximum path sums (leftMax and rightMax) starting from their respective child nodes.

Calculate Maximum Path Sums:
    Calculate the maximum of the left and right path sums (maxRightLeft).
    Calculate the maximum sum considering only the current node or including one of its child paths (maxOneNodeRoot).
    Calculate the maximum sum considering all three possibilities: left path, right path, and the current node (maxAll).

Update Maximum Sum: Update the global maxSum variable with the maximum of the current maxSum and the calculated maxAll.

Return Maximum Path Sum for Current Node: Return the maximum sum considering only the current node or including one of its child paths (maxOneNodeRoot). This value will be used by the parent node to calculate its maximum path sum.

Define Main Function: maxPathSum
    Initialize the maxSum variable to Integer.MIN_VALUE.
    Call the maxSumHelper function with the root of the binary tree to compute the maximum path sum.
    Return the final value of maxSum.
`;

const code3 = `
    class Solution {
        public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
            if(root == null || root == p || root == q){
                return root;
            }

            TreeNode left = lowestCommonAncestor(root.left, p, q);
            TreeNode right = lowestCommonAncestor(root.right, p, q);

            if(left != null && right != null){
                return root;
            }

            return (left!=null ? left : right);
        }
}
`;

const algo3 = `
Base Case:
    If the current node (root) is null or equal to either of the two nodes (p or q), return the current node.
    If root is null, it indicates that the end of a branch is reached, and no common ancestor is found.
    If root is equal to p or q, it means that one of the nodes is found, and the current node is a potential common ancestor.

Recursive Calls:
    Recursively call lowestCommonAncestor on the left and right subtrees to search for nodes p and q.
    Store the results in variables left and right.

Check Results:
    If both left and right are not null, it means that nodes p and q are found in different subtrees, and the current node (root) is the lowest common ancestor.
    Return the current node as the LCA.

Return Non-Null Result:
    If either left or right is non-null, return the non-null result.
    If both left and right are null, return null.
`;

const CodeAlgorithmCard = () => {
  return (
    <div className="animatedbg">
        <br/>
        <div>
            <h1 className="title"><u>DSA LAB REPORT</u></h1>
            <h2><b>1.BST to Greater Sum Tree</b></h2>
            <div className="code-algorithm-container">
            <div className="card code-card">
                <h2><i>Code:</i></h2>
                <pre>{code1}</pre>
            </div>
            <div className="card algorithm-card">
                <h2><i>Algorithm:</i></h2>
                <pre>{algo1}</pre>
            </div>
            </div>
            <img src={require('./images/gst.png')} className='code-image'/>
        </div>
        <br />
        <div>
            <h2>2.BST Maximum Path Sum</h2>
            <div className="code-algorithm-container">
            <div className="card code-card">
                <h2><i>Code:</i></h2>
                <pre>{code2}</pre>
            </div>
            <div className="card algorithm-card">
                <h2><i>Algorithm:</i></h2>
                <pre>{algo2}</pre>
            </div>
            </div>
            <img src={require('./images/mps.png')} className='code-image'/>
        </div>
        <br />
        <div>
            <h2>3.Lowest Common Ancestor of a BST</h2>
            <div className="code-algorithm-container">
            <div className="card code-card">
                <h2><i>Code:</i></h2>
                <pre>{code3}</pre>
            </div>
            <div className="card algorithm-card">
                <h2><i>Algorithm:</i></h2>
                <pre>{algo3}</pre>
            </div>
            </div>
            <img src={require('./images/lca.jpg')} className='code-image'/>
        </div>
    </div>
  );
};

export default CodeAlgorithmCard;