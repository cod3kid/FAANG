class BubbleSort {

    constructor() {
        this.arr = [5, 3, 2, 7, 1, 0, 11, 40, 25]
    }

    basic() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < this.arr.length; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    let swap = this.arr[j]
                    this.arr[j] = this.arr[j + 1]
                    this.arr[j + 1] = swap
                }
            }
        }

        return this.arr
    }

    optimized() {
        for (let i = this.arr.length; i > 0; i--) {
            for (let j = 0; j < i - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    let swap = this.arr[j]
                    this.arr[j] = this.arr[j + 1]
                    this.arr[j + 1] = swap
                }
            }
        }
        return this.arr
    }


    fullyOptimized() {
        let noSwaps;
        for (let i = this.arr.length; i > 0; i--) {
            noSwaps = true
            for (let j = 0; j < i - 1; j++) {
                if (this.arr[j] > this.arr[j + 1]) {
                    let swap = this.arr[j]
                    this.arr[j] = this.arr[j + 1]
                    this.arr[j + 1] = swap

                    noSwaps = false
                }

            }
            if (noSwaps)
                break;
        }
        return this.arr
    }
}


bubbleSort = new BubbleSort()
console.log(bubbleSort.fullyOptimized())