/**
 *計數排序
 *
 * @param arr要排序的數組大小
 * @param n數組元素個數
 */
function sort(arr, n) {
    if (n <= 1) {
        return;
    }

    //默認數組最大的元素為數組第一個元素
    let max = arr[0];
    //遍歷數組的所有的元素，找到最大的元素
    for (let i = 1; i < n; i++) {
        //若後面的元素大於指定的數組元素，則把元素進行交換
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    //申請一個計數數組，下標從0 ~max。
    let c = new int[max + 1];

    //遍歷數組，將每個元素的個數放入到計數數組中，比如分數為0的元素，在c[0]就累加1，依次類推
    for (let i = 0; i < n; i++) {
        c[arr[i]]++;
    }

    //開始重新整理c[]數組，將c[]數組順序求和，比如分數0的個數1，分數為1的個數為3。那麼重新整理後，分數<=0的為1，分數<=1人數誒1+3=4個，因為包含了<=0的個數，依次類推
    //所以終止條件為i<=max
    for (let i = 1; i <= max; i++) {
        c[i] = c[i] + c[i - 1];
    }

    //這時候開始進行排序，創建一個跟要排序的數組一樣大小的數據空間
    let temp = new int[n];

    //開始循環需要排序的數據
    for (let i = 0; i < n; i++) {
        //計算出需要往temp臨時數組哪個索引位置存放arr[i ]的值。
        //根據原始數組的值找到計數數組的對應值的計數個數，得到c[arr[i]]的值，也就是temp數組從0開始，所以需要減一
        let index = c[arr[i]] - 1;
        temp[index] = arr[i];
        //每次循環，計數數組的元素值減一，因為數組放到了temp數組中
        c[arr[i]]--;
    }

    //重新賦值
    for (let i = 0; i < n; i++) {
        arr[i] = temp[i];
    }
}