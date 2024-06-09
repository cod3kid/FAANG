const requestLogger = function (timeLimit) {
  this.rateLimiter = {};
  this.timeLimit = timeLimit;
};

requestLogger.prototype.messageRequestDecision = function (timestamp, request) {
  if (!this.rateLimiter[request]) {
    this.rateLimiter[request] = timestamp;
    return true;
  }

  let lastCalled = this.rateLimiter[request];
  let gap = timestamp - lastCalled;
  if (gap >= this.timeLimit) {
    this.rateLimiter[request] = timestamp;
    return true;
  }

  return false;
};

let rl = new requestLogger(7);

let times = [1, 5, 6, 7, 15];
let messages = [
  "good morning",
  "hello world",
  "good morning",
  "good morning",
  "hello world",
];

for (let i = 0; i < messages.length; i++) {
  console.log(i + 1 + `.\t Time, Message: {${times[i]}, '${messages[i]}'}`);
  console.log(
    "\t Message request decision: ",
    rl.messageRequestDecision(times[i], messages[i])
  );
  console.log("-".repeat(100));
}
