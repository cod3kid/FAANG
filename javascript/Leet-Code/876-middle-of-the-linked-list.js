const middleNode = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
};

// Use Fast and Slow Pointers. Slow pointer will be the middle node
