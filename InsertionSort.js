/**
 * 插入排序
 * @param a 待排序陣列
 * @param n 陣列長度
 */
function insertSort(a, n) {
    if (n <= 1) return;
    for (var i = 1; i < n; i++) {
        var value = a[i];
        var j = i - 1;
        //找到插入位置
        for (; j > 0; j--) {
            if (a[j] > value) {
                a[j + 1] = a[j];//移動數據
            } else {
                break;
            }
        }
        a[j + 1] = value;//插入數據
    }
}

let a = [1, 5, 2, 8, 9, 3]
insertSort(a, 6);
console.log(a);