var permArr = [],
    usedChars = [];

function permutations(input) {
    var i, ch;
    for (i = 0; i < input.length; i++) {
        ch = input.splice(i, 1)[0];
        usedChars.push(ch);
        if (input.length == 0) {
            permArr.push(usedChars.slice());
        }
        permutations(input);
        input.splice(i, 0, ch);
        usedChars.pop();
    }
    return permArr
};



let input = [1]
console.log(permutations(input))