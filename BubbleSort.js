/**
 * 冒泡排序
 * @param a 待排序陣列
 * @param n 数组长度
 */
function bubbleSort(a, n) {
    if (n <= 0) return;
    for (var i = 0; i < n; i++) {
        //标记一次冒泡是否存在数据交换，若存在，则改为true
        var tag = false;
        for (var j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                tag = true;
            }
        }
        //若本次冒泡操作未发生数据交换，则终止冒泡操作
        if (tag == false) break;
    }
}

let a = [1, 5, 2, 8, 9, 3]
bubbleSort(a, 6);
console.log(a);
