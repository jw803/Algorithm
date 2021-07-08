
// 计数排序，a是数组，n是数组大小。假设数组中存储的都是非负整数。
function countingSort(a, n) {
    if (n <= 1) return;

    // 查找数组中数据的范围
    let max = a[0];
    for (let i = 1; i < n; ++i) {
        if (max < a[i]) {
            max = a[i];
        }
    }

    let  c = new Array(max + 1); // 申请一个计数数组c，下标大小[0,max]
    for (let i = 0; i <= max; ++i) {
        c[i] = 0;
    }

    // 计算每个元素的个数，放入c中
    for (let i = 0; i < n; ++i) {
        c[a[i]]++;
    }

    // 依次累加
    for (let i = 1; i <= max; ++i) {
        c[i] = c[i - 1] + c[i];
    }

    // 临时数组r，存储排序之后的结果
    let  r = new Array(n);
    // 计算排序的关键步骤，有点难理解
    for (let i = n - 1; i >= 0; --i) {
        let index = c[a[i]] - 1;
        r[index] = a[i];
        c[a[i]]--;
    }

    // 将结果拷贝给a数组
    for (let i = 0; i < n; ++i) {
        a[i] = r[i];
    }
}