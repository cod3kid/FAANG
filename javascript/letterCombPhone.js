function letterCombinations(digits) {

    if (digits === null || '') {
        return []
    }

    res = ['']
    chars = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

    for (i = 0; i < digits.length; i++) {

        t = []
        c = chars[digits[i]]

        for (j = 0; j < c.length; j++) {
            for (k = 0; k < res.length; k++) {
                t.push(res[k]+c[j])
            }
        }
        res = t
    }
    return res
}

console.log(letterCombinations('72'))