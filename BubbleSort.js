/**
 * 冒泡排序
 * @param a 待排序陣列
 * @param n 陣列長度
 */
function bubbleSort(a, n) {
    if (n <= 0) return;
    for (var i = 0; i < n; i++) {
        //標記這回合的冒泡操作是否有涉及數據交換，若有，則改為true
        var tag = false;
        for (var j = 0; j < n - 1 - i; j++) {
            if (a[j] > a[j + 1]) {
                var temp = a[j];
                a[j] = a[j + 1];
                a[j + 1] = temp;
                tag = true;
            }
        }
        //若本次冒泡操作沒有涉及交換，代表整個陣列以排序完成，终止冒泡操作
        if (tag == false) break;
    }
}

let a = [1, 5, 2, 8, 9, 3]
bubbleSort(a, 6);
console.log(a);
