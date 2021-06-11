const merge = (arr, arrStartIndex, middleIndex, arrEndIndex) => {
    // 計算左右兩陣列的長度
    const leftArrLength = middleIndex - arrStartIndex + 1;
    const rightArrLength = arrEndIndex - middleIndex;
    const totalLength = leftArrLength + rightArrLength;

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

    LeftArr[leftArrLength] = Number.MAX_SAFE_INTEGER;
    RightArr[rightArrLength] = Number.MAX_SAFE_INTEGER;

    // 接著要開始遍歷左右陣列準備合併，於是要先建立兩個陣列的 index
    let leftArrIndex = 0, rightArrIndex = 0;
    // 合併後的大陣列 index
    let mergedArrIndex = arrStartIndex;
    for (let i = mergedArrIndex; i < totalLength; i++) {
        if (LeftArr[leftArrIndex] <= RightArr[rightArrIndex]) {
            arr[mergedArrIndex++] = LeftArr[leftArrIndex++];
        } else {
            arr[mergedArrIndex++] = RightArr[rightArrIndex++];
        }
    }
};


const mergeSort = (arr, arrStartIndex, arrEndIndex) => {
    console.log(arrStartIndex, arrEndIndex);
    if (arrStartIndex < arrEndIndex) {
        let middleIndex = (arrStartIndex + arrEndIndex) >> 1;

        // 這邊使用 Divide and Conquer，將複雜的問題分成兩個或更多的相同或相似的子問題
        console.log('呼叫1', arrStartIndex, middleIndex);
        mergeSort(arr, arrStartIndex, middleIndex);
        console.log('從1出來呼叫2');
        mergeSort(arr, middleIndex + 1, arrEndIndex);
        console.log('進行merge', arrStartIndex, middleIndex, arrEndIndex);
        merge(arr, arrStartIndex, middleIndex, arrEndIndex);
        console.log('merge結束', arr);
    }
    console.log('到底了');
}

let a = [8, 4, 3, 1, 5];
mergeSort(a, 0, 4);
console.log(a);