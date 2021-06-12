function quickSort(arr) {
    // 如果 array 為空陣列或只有一個元素，直接返回，不需排序。
    if (arr.length <=1 ) {
      return arr;
    }
    let pivot = arr[arr.length -1]; // 將陣列元素最後一項設為基準值
    let left = []; // 用來儲存比基準值小的元素
    let right = []; // 用來儲存比基準值大的元素
    for(let i = 0; i < arr.length - 1; i++) {
      // 設定 i < arr.length - 1 是因為陣列最後一項被我們設為 pivot 因此不需考慮
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  return [...quickSort(left), pivot, ...quickSort(right)]
  // 也可以寫成： return quickSort(left).concat(pivot, quickSort(right))
  }
let a = [1,5,3,7,9,3];
a = quickSort(a);
  console.log(a);