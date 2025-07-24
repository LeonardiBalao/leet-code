public class Solution {
    public bool IsValid(string s) {
        // If the string length is odd, it can't be valid (every open must have a close)
        if (s.Length % 2 != 0) return false;

        // Use stackalloc to allocate memory on the stack for performance
        // This avoids heap allocation and garbage collection
        Span<char> stack = stackalloc char[s.Length];
        int top = -1; // Stack pointer initialized to -1 (empty stack)

        foreach (char ch in s) {
            switch (ch) {
                // Push opening brackets onto the stack
                case '(':
                case '{':
                case '[':
                    stack[++top] = ch;
                    break;

                // For closing brackets, check if the top of the stack matches
                case ')':
                    if (top < 0 || stack[top--] != '(') return false;
                    break;

                case '}':
                    if (top < 0 || stack[top--] != '{') return false;
                    break;

                case ']':
                    if (top < 0 || stack[top--] != '[') return false;
                    break;

                // If any other character is encountered (shouldn't happen), return false
                default:
                    return false;
            }
        }

        // If the stack is empty, all brackets were matched correctly
        return top == -1;
    }

}