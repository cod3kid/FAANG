/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let top = stack.at(-1);
    let cur = asteroids[i];

    /*
        For the if condition
        top < 0: If the top is moving towards left, then cur cannot collide with top because cur can't catch
        top as they are traveling at the same speed and cur cannot collide if they are moving in opp. direction.
        
        cur > 0: If cur is moving towards right, then top cannot collide with curr even if top is moving towards
        right as they are traveling at the same speed
        */

    if (!stack.length || top < 0 || cur > 0) {
      stack.push(cur);
    } else if (-cur === top) {
      stack.pop();
    } else if (-cur > top) {
      stack.pop();
      i--;
    }
  }

  return stack;
};
