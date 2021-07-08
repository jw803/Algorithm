function bSearchLoopBSearch(a, low, high, value) {
    while (low <= high) {
        let mid = low + ((high - low) >> 1);
        //判断在顺序递增部分还是在循环数组部分
        if (a[mid] == value) {
            return mid;
        }
        if (a[low] <= a[mid]) {
            //循环段在右侧
            if (a[low] <= value && value < a[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            //循环段在左侧，
            if (a[mid] < value && value <= a[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }

        }
    }
    return -1;
}