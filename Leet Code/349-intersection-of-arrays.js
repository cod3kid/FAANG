//Leetcode 349
//HashMap

function arrayIntersection(nums1, nums2) {

    hashMap = {}
    result = []
    for (let i = 0; i < nums1.length; i++) {
        if (hashMap[nums1[i]] === undefined) {
            hashMap[nums1[i]] = 1
        }
    }

    for (let i = 0; i < nums2.length; i++) {
        if (hashMap[nums2[i]] && hashMap[nums2[i]] == 1) {
            result.push(nums2[i])
            hashMap[nums2[i]]++
        }
    }

    return result
}

nums1 = [4, 9, 5]
nums2 = [9, 4, 9, 8, 4]

console.log(arrayIntersection(nums1, num2))