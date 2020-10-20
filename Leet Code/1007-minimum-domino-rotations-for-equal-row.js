function minimumDominoRotations(A, B) {

    dict = {}
    aDomFlip = 0
    bDomFlip = 0
    // Mapping all the elements of both arrays into a dictionary
    for (let i = 0; i < A.length; i++) {
        if (dict.hasOwnProperty(A[i])) {
            dict[A[i]] += 1
        } else {
            dict[A[i]] = 1
        }

        if (dict.hasOwnProperty(B[i])) {
            dict[B[i]] += 1
        } else {
            dict[B[i]] = 1
        }
    }

    // Finding which element occurs the most ie, the elemt to be flipped
    let dominoTobeFlipped = 0
    let max = 0
    for (i in dict) {
        if (dict[i] > max) {
            dominoTobeFlipped = i
            max = dict[i]
        }
    }

    //Checking which array has maximum no. of 'dominoTobeFlipped'
    for (let i = 0; i < A.length; i++) {
        if (A[i] == dominoTobeFlipped) {
            aDomFlip++
        }

        if (B[i] == dominoTobeFlipped) {
            bDomFlip++
        }
    }

    //Finding Minimum No. of Flips , we'll the the array values based on aDomFlip or bDomFlip
    let noOfFlips = 0
    for (let i = 0; i < A.length; i++) {
        if (bDomFlip > aDomFlip) {
            if (A[i] == dominoTobeFlipped && A[i] != B[i]) {
                temp = A[i]
                A[i] = B[i]
                B[i] = temp
                noOfFlips++
            }
        }
        else {
            if (B[i] == dominoTobeFlipped && A[i] != B[i]) {
                temp = A[i]
                A[i] = B[i]
                B[i] = temp
                noOfFlips++
            }
        }
    }

    //If we cant get either of the arrays to the same value , we return -1
    for (let i = 0; i < B.length; i++) {
        if (bDomFlip > aDomFlip) {
            if (B[i] != dominoTobeFlipped) {
                return -1
            }
        }
        else {
            if (A[i] != dominoTobeFlipped) {
                return -1
            }
        }
    }

    return noOfFlips
}

A = [2, 1, 2, 4, 2, 2]
B = [5, 2, 6, 2, 3, 2]
console.log(minimumDominoRotations(A, B))