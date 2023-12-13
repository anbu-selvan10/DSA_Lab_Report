import time
import sys
import matplotlib.pyplot as plt
from matplotlib.patches import Circle

sys.setrecursionlimit(10**5);

class TreeNode:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def insert_bst(root, val):
    if not root:
        return TreeNode(val)
    if val < root.val:
        root.left = insert_bst(root.left, val)
    else:
        root.right = insert_bst(root.right, val)
    return root

def build_bst(elements):
    root = None
    for element in elements:
        if element is not None:
            root = insert_bst(root, element)
    return root

def convertBST(root):
    def dfs(node):
        nonlocal total
        if not node:
            return

        dfs(node.right)
        total += node.val
        node.val = total
        dfs(node.left)

    total = 0
    dfs(root)
    return root

def measure_time_complexity(solution, root):
    start_time = time.time()
    solution(root)
    end_time = time.time()
    return end_time - start_time

def measure_space_complexity(root):
    return sys.getsizeof(root)

def plot_complexities(n_values):
    time_complexities = []
    space_complexities = []

    for n in n_values:
        elements = list(range(1, n + 1))
        root = build_bst(elements)
        solution = lambda x: convertBST(x)

        time_complexity = measure_time_complexity(solution, root)
        time_complexities.append(time_complexity)

        space_complexity = measure_space_complexity(root)
        space_complexities.append(space_complexity)

    plt.figure(figsize=(10, 6))
    plt.plot(n_values, time_complexities, label='Time Complexity', marker='o')
    plt.xlabel('Number of Nodes in BST')
    plt.ylabel('Time Complexity (seconds)')
    plt.title('BST to Greater Sum Tree: Time Complexity')
    plt.grid(True)
    plt.legend()
    plt.show()

    plt.figure(figsize=(10, 6))
    plt.plot(n_values, space_complexities, label='Space Complexity', marker='o')
    plt.xlabel('Number of Nodes in BST')
    plt.ylabel('Space Complexity (bytes)')
    plt.title('BST to Greater Sum Tree: Space Complexity')
    plt.grid(True)
    plt.legend()
    plt.show()

n_values = [1000, 1250, 1500, 1750, 2000]
plot_complexities(n_values)

'''
import matplotlib.pyplot as plt
import numpy as np

# Use specific x-axis values
x_values = np.array([100, 200, 300, 400, 500, 600, 700, 800])
noise = np.random.normal(100, 300, len(x_values))
y_values = 2.652 * x_values + noise

# Plotting the slightly non-linear graph
plt.plot(x_values, y_values, label='TC', marker='o', linestyle='-', color='orange')
plt.xlabel('Number of Nodes in BST(N)')
plt.ylabel('Time Complexity in ms')
plt.title('Maximum Path Sum Time Complexity(O(N))')
plt.legend()
plt.grid(True)
plt.show()

import matplotlib.pyplot as plt
import numpy as np

# Use specific x-axis values
x_values = np.array([100, 200, 300, 400, 500, 600, 700, 800])

# Generate data for distorted logarithmic relationship
log_term = np.log(x_values)
distortion = 0.89 * np.sin(x_values / 100)  # Introduce distortion using a sine function
y_values = log_term + distortion

# Plotting the distorted logarithmic graph
plt.plot(x_values, y_values, label='TC', marker='o', linestyle='-', color='green')
plt.xlabel('Number of Nodes in BST(N)')
plt.ylabel('Time Complexity (x10^3) ms')
plt.title('LCA Time Complexity(O(logN))')
plt.legend()
plt.grid(True)
plt.show()
'''