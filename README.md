# MATHEUS BALÃO 07/24/2025
# C# LeetCode Problem Solutions
Welcome to my repository for solving coding problems in C#!  
This project contains my implementations of various algorithm and data structure challenges, primarily sourced from [LeetCode](https://leetcode.com/). It is intended to showcase my coding skills, problem-solving approach, and proficiency in C# for potential interviewers, recruiters, and fellow developers.

---

## 📚 Repository Structure

- Each problem solution is organized by its LeetCode problem name or number.
- Solutions are written in **C#** and typically include:
  - The main algorithm implementation
  - Comments explaining the logic and complexity

```
LeetCodeProblems/
├── 1. TwoSum.cs
├── 2. AddTwoNumbers.cs
├── 3. LongestSubstringWithoutRepeatingCharacters.cs
└── ...more problems
```

---

## 🛠️ Technologies Used

- **Language:** C#
- **IDE:** Visual Studio / VS Code
- **Platform:** .NET Core / .NET 9.0

---

## ✨ Why This Repo?

- **Demonstrates my coding style:** Clean, readable, and well-commented code.
- **Shows problem-solving ability:** Tackling a wide range of algorithmic challenges.
- **Ready for interviews:** Interviewers can quickly review solutions, complexity analysis, and test cases.

---

## 📝 Example Solution

```csharp
// Two Sum - LeetCode #1
public int[] TwoSum(int[] nums, int target)
{
    var dict = new Dictionary<int, int>();
    for (int i = 0; i < nums.Length; i++)
    {
        int complement = target - nums[i];
        if (dict.ContainsKey(complement))
            return new int[] { dict[complement], i };
        dict[nums[i]] = i;
    }
    throw new ArgumentException("No solution found.");
}
```

---

## ✅ Progress

- [x] Two Sum
- [x] Add Two Numbers
- [x] Longest Substring Without Repeating Characters
- [ ] ...more problems coming soon!

---

## 📬 Contact

Feel free to reach out for feedback, collaboration, or interview opportunities:

- **GitHub:** [LeonardiBalao](https://github.com/LeonardiBalao)

---

## 📄 License

This repository is licensed under the MIT License.  
You are welcome to use the code for learning and interview preparation.

---

**Happy Coding!**