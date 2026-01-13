/**
 * Binary Search Algorithm
 * 
 * Binary search is an efficient algorithm for finding a target value within a sorted array.
 * It works by repeatedly dividing the search interval in half.
 * 
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 * 
 * Prerequisites: The array must be sorted in ascending order
 */

/**
 * Iterative implementation of binary search
 * @param {number[]} arr - Sorted array of numbers
 * @param {number} target - The value to search for
 * @returns {number} - Index of target if found, -1 otherwise
 */
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Calculate mid point (avoiding potential overflow)
        let mid = left + Math.floor((right - left) / 2);

        // Check if target is at mid
        if (arr[mid] === target) {
            return mid;
        }
        // If target is greater, ignore left half
        else if (arr[mid] < target) {
            left = mid + 1;
        }
        // If target is smaller, ignore right half
        else {
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

/**
 * Recursive implementation of binary search
 * @param {number[]} arr - Sorted array of numbers
 * @param {number} target - The value to search for
 * @param {number} left - Left boundary of search space
 * @param {number} right - Right boundary of search space
 * @returns {number} - Index of target if found, -1 otherwise
 */
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    // Base case: element not found
    if (left > right) {
        return -1;
    }

    // Calculate mid point
    let mid = left + Math.floor((right - left) / 2);

    // Check if target is at mid
    if (arr[mid] === target) {
        return mid;
    }
    // If target is greater, search right half
    else if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    }
    // If target is smaller, search left half
    else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}

// Example usage and test cases
console.log("=== Binary Search Examples ===\n");

// Test case 1: Target exists in array
const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target1 = 7;
console.log("Array:", arr1);
console.log("Searching for:", target1);
console.log("Iterative result:", binarySearch(arr1, target1)); // Expected: 3
console.log("Recursive result:", binarySearchRecursive(arr1, target1)); // Expected: 3
console.log();

// Test case 2: Target does not exist
const arr2 = [2, 4, 6, 8, 10, 12, 14, 16];
const target2 = 5;
console.log("Array:", arr2);
console.log("Searching for:", target2);
console.log("Iterative result:", binarySearch(arr2, target2)); // Expected: -1
console.log("Recursive result:", binarySearchRecursive(arr2, target2)); // Expected: -1
console.log();

// Test case 3: Target at beginning
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target3 = 1;
console.log("Array:", arr3);
console.log("Searching for:", target3);
console.log("Iterative result:", binarySearch(arr3, target3)); // Expected: 0
console.log("Recursive result:", binarySearchRecursive(arr3, target3)); // Expected: 0
console.log();

// Test case 4: Target at end
const arr4 = [10, 20, 30, 40, 50];
const target4 = 50;
console.log("Array:", arr4);
console.log("Searching for:", target4);
console.log("Iterative result:", binarySearch(arr4, target4)); // Expected: 4
console.log("Recursive result:", binarySearchRecursive(arr4, target4)); // Expected: 4
console.log();

// Test case 5: Empty array
const arr5 = [];
const target5 = 1;
console.log("Array:", arr5);
console.log("Searching for:", target5);
console.log("Iterative result:", binarySearch(arr5, target5)); // Expected: -1
console.log("Recursive result:", binarySearchRecursive(arr5, target5)); // Expected: -1
console.log();

// Test case 6: Single element array - found
const arr6 = [42];
const target6 = 42;
console.log("Array:", arr6);
console.log("Searching for:", target6);
console.log("Iterative result:", binarySearch(arr6, target6)); // Expected: 0
console.log("Recursive result:", binarySearchRecursive(arr6, target6)); // Expected: 0
console.log();

// Test case 7: Negative numbers
const arr7 = [-50, -30, -10, 0, 10, 30, 50];
const target7 = -10;
console.log("Array:", arr7);
console.log("Searching for:", target7);
console.log("Iterative result:", binarySearch(arr7, target7)); // Expected: 2
console.log("Recursive result:", binarySearchRecursive(arr7, target7)); // Expected: 2

// Export functions for potential use in other files
module.exports = { binarySearch, binarySearchRecursive };
