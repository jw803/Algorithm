
/**
 * 選擇排序
 * @param a 待排序陣列
 * @param n 陣列長度
 */
function selectSort(a, n) {
    if (n <= 0) return;
    for (var i = 0; i < n; i++) {
        var min = i;
        // 找到最小值的index
        for (var j = i; j < n; j++) {
            if (a[j] < a[min]) min = j;
        }
        // 最小值的index和要交換的index一樣的話就不需做位置交換
        if (min != i) {
            var temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
}

let a = [1, 5, 2, 8, 9, 3]
selectSort(a, 6);
console.log(a);

