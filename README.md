# 🚀 LeetCode Solutions Repository

**A comprehensive collection of algorithmic problem solutions showcasing clean code practices and efficient algorithms.**

[![Language](https://img.shields.io/badge/Language-C%23-239120.svg)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![Language](https://img.shields.io/badge/Language-JavaScript-F7DF1E.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Problems Solved](https://img.shields.io/badge/Problems%20Solved-30+-brightgreen.svg)](#-problem-categories--solutions)

Welcome to my LeetCode solutions repository! This project demonstrates my problem-solving skills, coding proficiency, and understanding of algorithms and data structures. Designed for technical interviews, code reviews, and educational reference.

---

## 📊 Repository Statistics

| Metric | Value |
|--------|-------|
| **Total Problems Solved** | 30+ |
| **Primary Language** | C# (.NET 9.0) |
| **Secondary Language** | JavaScript (ES6+) |
| **Categories Covered** | Arrays, Strings, Trees, Linked Lists, Hash Tables, Stacks |
| **Last Updated** | January 2025 |
| **Difficulty Levels** | Easy (Primary Focus) |

---

## 🏗️ Repository Structure

```
LeetCodeProblems/
├── C#/                           # Primary solutions in C#
│   ├── 1. Two Sum.cs
│   ├── 9. Palindrome Number.cs
│   ├── 20. Valid Parentheses.cs
│   ├── 21. Merge Two Sorted Lists.cs
│   ├── 94. Binary Tree Inorder Traversal.cs
│   ├── 100. Same Tree.cs
│   ├── 121. Best Time to Buy and Sell Stock.cs
│   └── ... (25+ more solutions)
│
└── JavaScript/                   # JavaScript implementations
    └── 682. Baseball Game.js
```

---

## 🎯 Problem Categories & Solutions

### 📋 Arrays & String Manipulation
| Problem | Number | Difficulty | Key Concepts |
|---------|--------|------------|--------------|
| Two Sum | #1 | Easy | Hash Table, Array |
| Remove Duplicates from Sorted Array | #26 | Easy | Two Pointers |
| Remove Element | #27 | Easy | Two Pointers |
| Search Insert Position | #35 | Easy | Binary Search |
| Length of Last Word | #58 | Easy | String Processing |
| Plus One | #66 | Easy | Array Manipulation |
| Add Binary | #67 | Easy | String, Bit Manipulation |
| Valid Palindrome | #125 | Easy | Two Pointers, String |

### 🌳 Binary Trees
| Problem | Number | Difficulty | Key Concepts |
|---------|--------|------------|--------------|
| Binary Tree Inorder Traversal | #94 | Easy | Tree Traversal, Stack |
| Same Tree | #100 | Easy | DFS, Recursion |
| Symmetric Tree | #101 | Easy | DFS, BFS |
| Maximum Depth of Binary Tree | #104 | Easy | DFS, Recursion |
| Convert Sorted Array to BST | #108 | Easy | Divide and Conquer |
| Balanced Binary Tree | #110 | Easy | DFS, Height Calculation |
| Binary Tree Preorder Traversal | #144 | Easy | Tree Traversal |
| Binary Tree Postorder Traversal | #145 | Easy | Tree Traversal |

### 🔗 Linked Lists
| Problem | Number | Difficulty | Key Concepts |
|---------|--------|------------|--------------|
| Merge Two Sorted Lists | #21 | Easy | Merge, Recursion |
| Linked List Cycle | #141 | Easy | Floyd's Algorithm |
| Intersection of Two Linked Lists | #160 | Easy | Two Pointers |

### 🧮 Mathematical & Logic
| Problem | Number | Difficulty | Key Concepts |
|---------|--------|------------|--------------|
| Palindrome Number | #9 | Easy | Math, String |
| Roman to Integer | #13 | Easy | Hash Table, String |
| Valid Parentheses | #20 | Easy | Stack |
| Sqrt(x) | #69 | Easy | Binary Search, Math |
| Climbing Stairs | #70 | Easy | Dynamic Programming |
| Pascal's Triangle | #118 | Easy | Array, Dynamic Programming |
| Single Number | #136 | Easy | Bit Manipulation, XOR |

---

## 🛠️ Technologies & Tools

### Languages & Frameworks
- **C#** - .NET 9.0 with modern language features
- **JavaScript** - ES6+ with modern syntax

### Development Environment
- **IDEs:** Visual Studio 2022, Visual Studio Code
- **Version Control:** Git & GitHub
- **Code Quality:** Clean Code principles, SOLID patterns

### Key Programming Concepts Demonstrated
- ✅ **Time & Space Complexity Analysis**
- ✅ **Algorithm Design Patterns**
- ✅ **Data Structure Implementation**
- ✅ **Code Documentation & Comments**
- ✅ **Edge Case Handling**

---

## 💡 Solution Examples

### Example 1: Two Sum (Hash Table Approach)
```csharp
// LeetCode #1 - Two Sum
// Time: O(n), Space: O(n)
public int[] TwoSum(int[] nums, int target)
{
    var numToIndex = new Dictionary<int, int>();
    
    for (int i = 0; i < nums.Length; i++)
    {
        int complement = target - nums[i];
        
        if (numToIndex.ContainsKey(complement))
            return new int[] { numToIndex[complement], i };
            
        numToIndex[nums[i]] = i;
    }
    
    throw new ArgumentException("No two sum solution exists.");
}
```

### Example 2: Baseball Game (Stack Simulation)
```javascript
// LeetCode #682 - Baseball Game
// Time: O(n), Space: O(n)
var calPoints = function(operations) {
    const scores = [];
    
    for (const op of operations) {
        switch (op) {
            case "C":
                scores.pop();
                break;
            case "D":
                scores.push(scores[scores.length - 1] * 2);
                break;
            case "+":
                scores.push(scores[scores.length - 1] + scores[scores.length - 2]);
                break;
            default:
                scores.push(parseInt(op));
        }
    }
    
    return scores.reduce((sum, score) => sum + score, 0);
};
```

### Example 3: Binary Tree Traversal (Recursive Approach)
```csharp
// LeetCode #94 - Binary Tree Inorder Traversal
// Time: O(n), Space: O(h) where h is height
public IList<int> InorderTraversal(TreeNode root)
{
    var result = new List<int>();
    InorderHelper(root, result);
    return result;
}

private void InorderHelper(TreeNode node, IList<int> result)
{
    if (node == null) return;
    
    InorderHelper(node.left, result);   // Visit left subtree
    result.Add(node.val);               // Visit root
    InorderHelper(node.right, result);  // Visit right subtree
}
```

---

## 📈 Progress Tracking

### By Difficulty Level
| Difficulty | Count | Percentage | Status |
|------------|-------|------------|---------|
| Easy | 30+ | 🟢 **95%** | Primary Focus |
| Medium | 0 | 🟡 **0%** | Coming Soon |
| Hard | 0 | 🔴 **0%** | Future Goal |

### By Topic Mastery
| Topic | Problems Solved | Proficiency |
|-------|----------------|-------------|
| Arrays & Strings | 15+ | 🟢 Advanced |
| Binary Trees | 8+ | 🟢 Advanced |
| Linked Lists | 3+ | 🟡 Intermediate |
| Hash Tables | 5+ | 🟢 Advanced |
| Dynamic Programming | 3+ | 🟡 Intermediate |
| Mathematical | 4+ | 🟢 Advanced |

---

## 🎯 Development Roadmap

### Upcoming Enhancements
- [ ] Add Medium difficulty problems
- [ ] Implement solutions in additional languages
- [ ] Enhanced complexity analysis documentation
- [ ] Algorithm pattern recognition guides
- [ ] Performance optimization studies

---

## 🏆 Repository Highlights

### Code Quality Standards
- **Professional Architecture:** Well-structured and maintainable code
- **Comprehensive Documentation:** Detailed explanations and complexity analysis
- **Industry Best Practices:** Following established coding standards
- **Robust Solutions:** Thorough edge case handling and testing

### Educational Value
- **Algorithm Pattern Recognition:** Solutions organized by common patterns
- **Complexity Analysis:** Time and space complexity clearly documented
- **Interview Preparation:** Optimized for technical interview scenarios
- **Clean Code Principles:** Demonstrating professional development practices

---

## 🙏 Acknowledgments

- **LeetCode Platform** for providing excellent algorithmic challenges
- **Microsoft & JavaScript Communities** for excellent development tools and resources
- **Computer Science Education** for fundamental algorithmic knowledge

---

Test