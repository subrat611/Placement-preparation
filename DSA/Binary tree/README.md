# Binary Tree

- [What is Binary Tree](#what-is-binary-tree)
- [Representation of Binary Tree](#representation-of-binary-tree)
- [Basic Operations On Binary Tree](#basic-operations-on-binary-tree)
- [Auxiliary Operations On Binary Tree](#auxiliary-operations-on-binary-tree)
- [Binary Tree Traversals](#binary-tree-traversals)
- [Implementation of Binary Tree](#implementation-of-binary-tree)

## What is Binary Tree?

- Binary tree is a hierarchical/tree data structure in which each node can have at most two children, which are referred to as the left child and the right child.
- The topmost node in a binary tree is called the root, and the bottom-most nodes are called leaves.
- A subtree is a part of the tree below any chosen node that can be considered as a separate tree with that node as a root node.

![image](https://github.com/subrat611/Placement-preparation/assets/77252075/bfb6694a-5ed6-4509-aa67-30e82fa85195)

## Representation of Binary Tree

- Data
- Pointer to the left child
- Pointer to the right child

![image](https://github.com/subrat611/Placement-preparation/assets/77252075/a52649de-8778-4749-ac5b-735ac3051f40)

```cpp
// Use any below method to implement Nodes of tree

// Method 1: Using "struct" to make
// user-define data type
struct node {
    int data;
    struct node* left;
    struct node* right;
};

// Method 2: Using "class" to make
// user-define data type
class Node {
public:
    int data;
    Node* left;
    Node* right;
};
```

## Basic Operations On Binary Tree

- Inserting an element.
- Removing an element.
- Searching for an element.
- Deletion for an element.
- Traversing an element. There are four (mainly three) types of traversals in a binary tree which will be discussed ahead.

## Auxiliary Operations On Binary Tree

- Finding the height of the tree
- Find the level of the tree
- Finding the size of the entire tree

## Binary Tree Traversals

Tree Traversal algorithms can be classified broadly into two categories:

- Depth-First Search (DFS) Algorithms
  - In-order Traversal (left root right)
  - Pre-order Traversal (root left right)
  - Post-order Traversal (Left right root)
- Breadth-First Search (BFS) Algorithms

## Implementation of Binary Tree

```cpp
#include <bits/stdc++.h>
using namespace std;

class Node {
public:
	int data;
	Node* left;
	Node* right;
	// Val is the key or the value that
	// has to be added to the data part
	Node(int val)
	{
		data = val;
		// Left and right child for node
		// will be initialized to null
		left = NULL;
		right = NULL;
	}
};

int main()
{
	/*create root*/
	Node* root = new Node(1);

	/* following is the tree after above statement
	1
	/ \
	NULL NULL
	*/
	root->left = new Node(2);
	root->right = new Node(3);

	/* 2 and 3 become left and right children of 1
	1
	/ \
	2 3
	/ \ / \
	NULL NULL NULL NULL
	*/
	root->left->left = new Node(4);
	/* 4 becomes left child of 2
		1
	/ \
	2	 3
	/ \ / \
	4 NULL NULL NULL
	/ \
	NULL NULL
	*/
	return 0;
}

```
