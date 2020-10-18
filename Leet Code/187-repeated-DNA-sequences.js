function repeatedDNASequence(s) {

    d = {}
    res = []

    for (let i = 0; i < s.length - 9; i++) {
        sequence = s.slice(i, i + 10)
        if (d[sequence] == undefined) {
            d[sequence] = 1
        } else {
            d[sequence]++
        }
    }

    for (let i in d) {
        if (d[i] > 1) {
            res.push(i)
        }
    }
    return res
}


s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
console.log(repeatedDNASequence(s))