class Point {
  constructor(x, y, data = null) {
    this.x = x;
    this.y = y;
    this.data = data;
  }
}

class Rectangle {
  constructor(x, y, width, height) {
    this.x = x; // center x
    this.y = y; // center y
    this.width = width; // half width
    this.height = height; // half height
  }

  contains(point) {
    return (
      point.x >= this.x - this.width &&
      point.x <= this.x + this.width &&
      point.y >= this.y - this.height &&
      point.y <= this.y + this.height
    );
  }

  intersects(range) {
    return !(
      range.x - range.width > this.x + this.width ||
      range.x + range.width < this.x - this.width ||
      range.y - range.height > this.y + this.height ||
      range.y + range.height < this.y - this.height
    );
  }
}

class QuadTree {
  constructor(boundary, capacity = 4) {
    this.boundary = boundary;
    this.capacity = capacity;
    this.points = [];
    this.divided = false;
    this.northeast = null;
    this.northwest = null;
    this.southeast = null;
    this.southwest = null;
  }

  subdivide() {
    let x = this.boundary.x;
    let y = this.boundary.y;
    let w = this.boundary.width / 2;
    let h = this.boundary.height / 2;

    let ne = new Rectangle(x + w, y - h, w, h);
    this.northeast = new QuadTree(ne, this.capacity);

    let nw = new Rectangle(x - w, y - h, w, h);
    this.northwest = new QuadTree(nw, this.capacity);

    let se = new Rectangle(x + w, y + h, w, h);
    this.southeast = new QuadTree(se, this.capacity);

    let sw = new Rectangle(x - w, y + h, w, h);
    this.southwest = new QuadTree(sw, this.capacity);

    this.divided = true;
  }

  insert(point) {
    if (!this.boundary.contains(point)) {
      return false;
    }

    if (this.points.length < this.capacity) {
      this.points.push(point);
      return true;
    }

    if (!this.divided) {
      this.subdivide();
    }

    return (
      this.northeast.insert(point) ||
      this.northwest.insert(point) ||
      this.southeast.insert(point) ||
      this.southwest.insert(point)
    );
  }

  query(range, found = []) {
    if (!this.boundary.intersects(range)) {
      return found;
    }

    for (let p of this.points) {
      if (range.contains(p)) {
        found.push(p);
      }
    }

    if (this.divided) {
      this.northeast.query(range, found);
      this.northwest.query(range, found);
      this.southeast.query(range, found);
      this.southwest.query(range, found);
    }

    return found;
  }

  getAllPoints(found = []) {
    for (let p of this.points) {
      found.push(p);
    }

    if (this.divided) {
      this.northeast.getAllPoints(found);
      this.northwest.getAllPoints(found);
      this.southeast.getAllPoints(found);
      this.southwest.getAllPoints(found);
    }

    return found;
  }
}

// Example usage
const boundary = new Rectangle(200, 200, 200, 200);
const qt = new QuadTree(boundary, 4);

// Insert some points
for (let i = 0; i < 20; i++) {
  let x = Math.floor(Math.random() * 400);
  let y = Math.floor(Math.random() * 400);
  let p = new Point(x, y, `Point ${i}`);
  qt.insert(p);
}

console.log("Total points inserted:", qt.getAllPoints().length);

// Query a range
const range = new Rectangle(200, 200, 50, 50);
const pointsInRange = qt.query(range);
console.log("Points in query range:", pointsInRange.length);
console.log("Points found:", pointsInRange.map(p => `(${p.x}, ${p.y})`).join(", "));

// Note:
// QuadTree is a tree data structure used to partition a 2D space by recursively subdividing it into four quadrants or regions.
// It's commonly used for spatial indexing, collision detection, nearest neighbor search, and image compression.
// Time Complexity:
//   - Insert: O(log n) average case, O(n) worst case
//   - Query: O(log n + k) where k is the number of points found
// Space Complexity: O(n)
