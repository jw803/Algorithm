const merge = (arr, arrStartIndex, middleIndex, arrEndIndex) => {
  // 計算左右兩陣列的長度
  const leftArrLength = middleIndex - arrStartIndex + 1;
  const rightArrLength = arrEndIndex - middleIndex;

  // 製作左右兩陣列
  let LeftArr = new Array(leftArrLength);
  let RightArr = new Array(rightArrLength);

  // 將資料放入左右兩陣列
  for (let i = 0; i < leftArrLength; i++) {
    // 從 arrStarIndex 開始
    LeftArr[i] = arr[arrStartIndex + i];
  }

  for (let j = 0; j < rightArrLength; j++) {
    // 從 middleIndex 開始
    RightArr[j] = arr[middleIndex + 1 + j];
  }

  // 接著要開始遍歷左右陣列準備合併，於是要先建立兩個陣列的 index
  let leftArrIndex = 0, rightArrIndex = 0;
  // 合併後的大陣列 index
  let mergedArrIndex = arrStartIndex;

  while (leftArrIndex < leftArrLength && rightArrIndex < rightArrLength) {
    // 比較左右兩陣列的數值，數值小的放入合併後的陣列
    if (LeftArr[leftArrIndex] <= RightArr[rightArrIndex]) {
      arr[mergedArrIndex] = LeftArr[leftArrIndex];
      leftArrIndex++;
    } else {
      arr[mergedArrIndex] = RightArr[rightArrIndex];
      rightArrIndex++;
    }

    mergedArrIndex++;
  }

  // 將剩餘的數值放入合併後的陣列，剩餘數值會將大於合併後的陣列內的任一元素
  while (leftArrIndex < leftArrLength) {
    arr[mergedArrIndex] = LeftArr[leftArrIndex];
    leftArrIndex++;
    mergedArrIndex++;
  }

  // 將剩餘的數值放入合併後的陣列，剩餘數值會將大於合併後的陣列內的任一元素
  while (rightArrIndex < rightArrLength) {
    arr[mergedArrIndex] = RightArr[rightArrIndex];
    rightArrIndex++;
    mergedArrIndex++;
  }
};


const mergeSort = (arr, arrStartIndex, arrEndIndex) => {
  if (arrStartIndex < arrEndIndex) {
    let middleIndex = (arrStartIndex + arrEndIndex) >> 1;

    // 這邊使用 Divide and Conquer，將複雜的問題分成兩個或更多的相同或相似的子問題
    mergeSort(arr, arrStartIndex, middleIndex);
    mergeSort(arr, middleIndex + 1, arrEndIndex);

    merge(arr, arrStartIndex, middleIndex, arrEndIndex);
  }
}

let a = [8, 4, 3, 1, 5];
mergeSort(a, 0, 4);
console.log(a);