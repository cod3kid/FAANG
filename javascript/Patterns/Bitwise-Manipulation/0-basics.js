// Bitwise AND Operation

console.log(5 & 7);

/**
 * Answer is 4
 *
 * 101
 * 111
 * ----
 * 100
 *
 */

// Bitwise OR Operation

console.log(5 | 7);

/**
 * Answer is 7
 *
 * 101
 * 111
 * ----
 * 111
 *
 */

// Bitwise XOR Operation

console.log(5 ^ 7);

/**
 * Answer is 2
 *
 * 101
 * 111
 * ----
 * 010
 *
 *
 * Same digits will be zero and different will be 1
 */

// Bitwise NOT Operation

console.log(~5);

/**
 * Answer is -6
 *
 * 5 => 00000101
 * First flip  all the digits
 * 11111010
 * Now, convert to 2's complement form, Flip again and add 1
 *
 * 00000101
 * 00000001
 * ---------
 * 00000110
 *
 * that's -6
 */

// Bitwise Left Shift Operation

console.log(5 << 2);

/**
 * Answer is 20
 *
 * 00000101
 *
 * After shifting
 * 00010100
 *
 */

// Bitwise Right Shift Operation

console.log(5 << 2);

/**
 * Answer is 1
 *
 * 00000101
 *
 * After shifting
 * 00000001
 *
 */
