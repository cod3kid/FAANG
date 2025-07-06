// AKA Disjoint-Set-Union

class UnionFind {
  constructor(n) {
    this.parent = new Array(n + 1).fill(null).map((_, idx) => idx);
    this.rank = new Array(n + 1).fill(1);
  }

  find(v) {
    if (this.parent[v] !== v) {
      this.parent[v] = this.find(this.parent[v]);
    }

    return this.parent[v];
  }

  union(u, v) {
    let repU = this.find(u);
    let repV = this.find(v);

    if (repU === repV) return false; // Cycle Detected

    if (this.rank[repU] > this.rank[repV]) {
      this.parent[repV] = repU;
    } else if (this.rank[repU] < this.rank[repV]) {
      this.parent[repU] = repV;
    } else {
      this.parent[repV] = repU;
      this.rank[repU] += 1;
    }

    return true;
  }
}
