
// 二分查找的递归实现
function bsearch(a, n, val) {
    return bsearchInternally(a, 0, n - 1, val);
  }
  
function bsearchInternally(a, low, high, value) {
    if (low > high) return -1;
  
    let mid =  low + ((high - low) >> 1);
    if (a[mid] == value) {
      return mid;
    } else if (a[mid] < value) {
      return bsearchInternally(a, mid+1, high, value);
    } else {
      return bsearchInternally(a, low, mid-1, value);
    }
  }