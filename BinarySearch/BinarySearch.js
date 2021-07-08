function bsearch(a, n, value) {
    let low = 0;
    let high = n - 1;
  
    while (low <= high) {
      let mid = low + ((high - low) >> 1 );
      if (a[mid] == value) {
        return mid;
      } else if (a[mid] < value) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
    return -1;
}


let arrary = [1,3,45,66,89,102];
let index = bsearch(arrary, 6, 45);
console.log(index);