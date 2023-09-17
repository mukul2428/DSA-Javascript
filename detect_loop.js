function hasCycle(head) {
  // Step 1: Check for empty list or a list with only one element
  if (!head || !head.next) {
    return false; // No loop if the list is empty or has only one element
  }

  // Step 2: Initialize two pointers, slow and fast, both starting at the head of the list
  let slow = head; // Slow pointer moves one step at a time
  let fast = head; // Fast pointer moves two steps at a time

  // Step 3: Traverse the linked list
  while (fast && fast.next) {
    slow = slow.next; // Move slow pointer one step forward
    fast = fast.next.next; // Move fast pointer two steps forward

    // Step 4: Check if the slow and fast pointers meet
    if (slow === fast) {
      return true; // Loop detected, the fast pointer caught up to the slow pointer
    }
  }

  // Step 5: If we reach the end of the list without detecting a loop, return false
  return false; // No loop found
}
