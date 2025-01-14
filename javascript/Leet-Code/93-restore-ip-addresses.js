/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let result = [];

  const backtrack = (i, dots, currentIP) => {
    if (dots === 4 && i === s.length) {
      result.push(currentIP.slice(0, -1));
      return;
    }

    /*
    Prevents the IP Addresses from having more than 4 dots, which would lead to an invalid IP address.
    */
    if (dots > 4) return;

    /*
        This ensures that each segment of the IP address
        being checked has a maximum of 3 characters, as required by the IPv4 address format
      */
    for (let j = i; j < Math.min(i + 3, s.length); j++) {
      let next = parseInt(s.slice(i, j + 1));

      /*
            i == j || s[i] != "0"
            It is to remove trailing zeroes.

            i==j => If the segment contains only one number
            s[i] != "0" => This prevents numbers like "01", "001", etc., which have leading zeros, from being considered valid.
        */
      if (next < 256 && (i == j || s[i] != "0")) {
        backtrack(j + 1, dots + 1, currentIP + next + ".");
      }
    }
  };

  backtrack(0, 0, "");

  return result;
};
