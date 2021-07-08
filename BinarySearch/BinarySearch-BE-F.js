function bsearch(a, n, value) {
    let low = 0;
    let high = n - 1;
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        if (a[mid] >= value) {
            if ((mid == 0) || (a[mid - 1] < value)) return mid;
            else high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

let ar = [1, 3, 4, 4, 5];
let index = bsearch(ar, 5, 4);
console.log(index);