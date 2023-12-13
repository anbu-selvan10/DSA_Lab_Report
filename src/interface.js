import React from 'react';
import { useState } from 'react';
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
        private int maxSum = Integer.MIN_VALUE;

        public int maxPathSum(TreeNode root) {
            maxSumHelper(root);
            return maxSum;
        }

        public int maxSumHelper(TreeNode root){
            if(root == null) return 0;

            int left = maxSumHelper(root.left);
            int right = maxSumHelper(root.right);
            maxSum = Math.max(root.val+left+right, maxSum);
            return Math.max(left,right) + root.val;
        }
    }
`;

const algo2 = `
Initialization: maxSum is initialized to Integer.MIN_VALUE to keep track of the maximum path sum across the entire tree.

maxPathSum Method: The maxPathSum method is the main entry point that calls the maxSumHelper method and returns the final result.

maxSumHelper Method:
    Base Case: If the current node (root) is null, return 0.

    Recursive Calls: Recursively call maxSumHelper on the left and right subtrees to compute the maximum path sum for each subtree.

    Update Maximum Path Sum:
        Calculate the maximum path sum that includes the current node by adding the value of the current node, the maximum path sum from the left subtree, and the maximum path sum from the right subtree.

        Update the global maxSum with the maximum value computed in the previous step.

        Return the maximum of the sum of the current node and the maximum path sum from either the left or right subtree. This value represents the maximum path sum for the current subtree.
`;

const code3 = `
    class Solution {
        public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
            if (root.val > p.val && root.val > q.val) {
                return lowestCommonAncestor(root.left, p, q);
            } else if (root.val < p.val && root.val < q.val) {
                return lowestCommonAncestor(root.right, p, q);
            } else {
                return root;
            }
        }
    }
`;

const algo3 = `
Base Case: Checks if the current node is null or equal to either of the two nodes (p or q).

Recursive Calls: Determines whether to traverse the left or right subtree based on the values of p, q, and the current root.

Found Lowest Common Ancestor: If the conditions are not met for recursive calls, it means one node is in the left subtree, and the other is in the right subtree. The current root is the lowest common ancestor, and it is returned.
`;

const CodeAlgorithmCard = () => {
    const [isButtonClicked1, setButtonClicked1] = useState(false);
    const [isButtonClicked2, setButtonClicked2] = useState(false);
    const [isButtonClicked3, setButtonClicked3] = useState(false);

    const [isButtonClicked01, setButtonClicked01] = useState(false);
    const [isButtonClicked02, setButtonClicked02] = useState(false);
    const [isButtonClicked03, setButtonClicked03] = useState(false);

    const handleButtonClick1 = () => {
        setButtonClicked1(true);
    };

    const handleButtonClick2 = () => {
        setButtonClicked2(true);
    };

    const handleButtonClick3 = () => {
        setButtonClicked3(true);
    };

    const handleButtonClick01 = () => {
        setButtonClicked01(true);
    };

    const handleButtonClick02 = () => {
        setButtonClicked02(true);
    };

    const handleButtonClick03 = () => {
        setButtonClicked03(true);
    };

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
            <br />
            {isButtonClicked1 ? (
            <video width="640" height="360" controls>
                <source src={require('./videos/gst_vid.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            ) : (
            <button type="submit" onClick={handleButtonClick1}>
                Visualization with explanation
            </button>
            )}
            <hr />   
            {isButtonClicked01 ? (
                <div>
                <p>TC: The time complexity of this code is O(N), where N is the number of nodes in the binary search tree (BST). The reason for this is that the code visits each node exactly once, and the work done at each node is constant time.</p>
                <p>SC: The space complexity is O(H), where H is the height of the binary search tree. In the worst case, where the tree is skewed and has a height equal to the number of nodes (N), the space complexity would be O(N). However, in a balanced BST, the height is logarithmic in the number of nodes (H = log(N)), so the space complexity becomes O(log(N)).</p>
                </div>
                ) : (
                <button type="submit" onClick={handleButtonClick01}>
                    Time and Space Complexity Analysis
                </button>
                )}
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
            <br />
            {isButtonClicked2 ? (
                <video width="640" height="360" controls>
                    <source src={require('./videos/mps_vid.mp4')} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                ) : (
                <button type="submit" onClick={handleButtonClick2}>
                    Visualization with explanation
                </button>
                )}
            
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
            <br />
            {isButtonClicked3 ? (
            <video width="640" height="360" controls>
                <source src={require('./videos/lca_vid.mp4')} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            ) : (
            <button type="submit" onClick={handleButtonClick3}>
                Visualization with explanation
            </button>
            )}
        </div>
    </div>
  );
};

export default CodeAlgorithmCard;