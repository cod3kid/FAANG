const validIPAddresses = (str) => {
  const allIPAddresses = [];

  for (let i = 0; i < Math.min(str.length, 4); i++) {
    const currentIPAddress = ["", "", "", ""];

    currentIPAddress[0] = str.slice(0, i);
    if (!isValidPart(currentIPAddress[0])) continue;

    for (let j = i + 1; j < i + Math.min(str.length - i, 4); j++) {
      currentIPAddress[1] = str.slice(i, j);
      if (!isValidPart(currentIPAddress[1])) continue;

      for (let k = j + 1; k < j + Math.min(str.length - j, 4); k++) {
        currentIPAddress[2] = str.slice(j, k);
        currentIPAddress[3] = str.slice(k);

        if (
          isValidPart(currentIPAddress[2]) &&
          isValidPart(currentIPAddress[3])
        ) {
          allIPAddresses.push(currentIPAddress.join("."));
        }
      }
    }
  }
  return allIPAddresses;
};

const isValidPart = (ip) => {
  const ipInt = parseInt(ip);
  if (ipInt > 255) return false;

  return ip.length === ipInt.toString().length; // check for leading 0's
};

let str = "1921680";
console.log(validIPAddresses(str));
