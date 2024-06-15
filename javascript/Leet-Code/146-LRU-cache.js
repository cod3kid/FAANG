var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.cache = new Map();
};

LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) return -1;

  let val = this.cache.get(key);
  this.cache.delete(key);
  this.cache.set(key, val);
  return val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  }

  this.cache.set(key, value);

  if (this.cache.size > this.capacity) {
    let lruItem = this.cache.keys().next().value;
    this.cache.delete(lruItem);
  }
};

/**
 LRU cache implemented using ES Map() as it stores item in the order it's inserted
**/
