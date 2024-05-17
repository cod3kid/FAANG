const rescueBoats = (people, limit) => {
  people.sort((a, b) => a - b);
  let left = 0;
  let right = people.length - 1;
  let noOfBoats = 0;

  while (left < right) {
    if (people[left] + people[right] <= limit) {
      left++;
      right--;
    } else {
      right--;
    }
    noOfBoats++;
  }
  return noOfBoats;
};

const people = [3, 1, 4, 2, 4];
const limit = 4;
console.log(rescueBoats(people, limit));
