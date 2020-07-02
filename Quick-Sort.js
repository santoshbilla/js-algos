let pivotingFunction = (arr, left, right) => {
  let pivot = arr[Math.floor((left + right)/2)];
  while(left <= right){
    while(arr[ left ] < pivot) {
      left++;
    }
    while(arr[right]> pivot) {
      right--;
    }
    if(left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++; right--;
    }
  }
  return left;
}

let quickSort = (arr, start = 0, end = arr.length-1) => {
  if(arr.length>1) {
    let pivot = pivotingFunction(arr, start, end);
    if(start < pivot-1) {
      quickSort(arr, start, pivot - 1);
    }
    if(end > pivot) {
      quickSort(arr, pivot, end);
    }
  }
  return arr;
}