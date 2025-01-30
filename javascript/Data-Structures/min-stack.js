var MinStack = function () {
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  let min = this.getMin();
  if (min === null || min > val) {
    min = val;
  }
  this.stack.push([val, min]);

  return val;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  return this.stack.pop()[0];
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack.at(-1)[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack.length ? this.stack.at(-1)[1] : null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
