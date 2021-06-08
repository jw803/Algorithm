
/**
 * 选择排序
 * @param a 待排序数组
 * @param n 数组长度
 */
function selectSort(a, n) {
    if (n <= 0) return;
    for (var i = 0; i < n; i++) {
        var min = i;
        for (var j = i; j < n; j++) {
            if (a[j] < a[min]) min = j;
        }
        if (min != i) {
            var temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
}

