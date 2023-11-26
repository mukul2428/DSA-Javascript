function isBalancedParentheses(str) {
    const stack = []; // Initialize an empty stack to keep track of opening parentheses.
    const openToCloseMap = {
      '(': ')',   // Mapping opening parentheses to their corresponding closing parentheses.
      '[': ']',
      '{': '}',
    };
  
    // Iterate through each character in the input string.
    for (const char of str) {
      if (char in openToCloseMap) {
        // If the current character is an opening parenthesis, push it onto the stack.
        stack.push(char);
      } else {
        // If the current character is a closing parenthesis, check if it matches the corresponding opening parenthesis.
        const lastOpen = stack.pop(); // Pop the last opening parenthesis from the stack.
        if (openToCloseMap[lastOpen] !== char) {
          // If the current closing parenthesis does not match the corresponding opening parenthesis, the parentheses are not balanced.
          return false;
        }
      }
    }
  
    // After processing all characters, check if there are any remaining opening parentheses left in the stack.
    // If there are, it means the parentheses are not balanced.
    // Otherwise, return true, indicating that the parentheses are balanced.
    return stack.length === 0;
  }
  

isBalancedParentheses("([{}]){}");