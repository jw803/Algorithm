/**
 * 堆排序
 *
 * Author: nameczz
 */

// 忽視數組的第一位
class HeapSort {
    constructor(originArray) {
        this.originArray = originArray
        console.log(this.originArray)
    }
    buildHeap() {
        const arr = this.originArray
        const startIndex = Math.floor(arr.length/2)
        for (let i = startIndex; i >= 1; i--) {
            this.heapify(arr, arr.length, i)
        }
        return arr
    }

    heapify(arr, len, i) {
        while (true) {
            let maxPos = i
            // 如果index i擁有葉左節點 並且左節點較大
            if (i * 2 <= len && arr[i] < arr[i * 2]) {
                maxPos = i * 2
            }
            // 如果index i擁有葉右節點 與Max節點比較大小，選出父/左/右中最大的一個
            if (i * 2 + 1 <= len && arr[maxPos] < arr[i * 2 + 1]) {
                maxPos = i * 2 + 1
            }
            if (maxPos === i) break // 循環直到i節點為最大值
            this.swap(arr, i, maxPos) // 交換位置, 父節點為父/左/右中最大的一個
            i = maxPos // i為左/右節點，並嘗試向下查找更大的值
        }
    }

    sort() {
        const arr = this.buildHeap() // 先建堆
        let len = arr.length - 1
        while (len > 1) {
            this.swap(arr, 1, len) // 交換頂元素和最後一位。頂元素永遠是最大的。
            len--
            this.heapify(arr, len, 1) //剩下的元素重新建堆 直到len === 1 停止
        }
        console.log(arr)
    }

    swap(arr, i, max) {
        let temp = arr[i]
        arr[i] = arr[max]
        arr[max] = temp
    }
}

const arr = [null]
let i = 0
while (i <= 10) {
    const num = Math.floor(Math.random() * 100)
    arr.push(num)
    i++
}
const testHeap = new HeapSort(arr)
testHeap.sort()