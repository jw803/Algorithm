/**
 * 插入排序
 * @param a 待排序数组
 * @param n 表示数组大小
 */
function insertSort(a, n) {
    if (n <= 1) return;
    for (var i = 1; i < n; i++) {
        var value = a[i];
        var j = i - 1;
        //找到插入位置
        for (; j > 0; j--) {
            if (a[j] > value) {
                a[j + 1] = a[j];//移动数据
            } else {
                break;
            }
        }
        a[j + 1] = value;//插入数据
    }
}

function InsertSort(a, n) {
    if (n < 1) return;

    for (let i = 1; i < n; i++) {
        let j = i - 1;
        for (; j >=0; j--) {
            if (a[i] < a[j]) {
                a[j + 1] = a[j];
            }else {
                break;
            }
        }
        a[j + 1] = a[i];
    }
}