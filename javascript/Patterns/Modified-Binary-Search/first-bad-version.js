const firstBadVersion = (n) => {
  let start = 1,
    end = n,
    calls = 0;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (isBadVersion(mid)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    calls++;
  }

  return [start, calls];
};

const isBadVersion = (v) => {
  return v >= 28;
};

console.log(firstBadVersion(38));
