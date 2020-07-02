let selectionSort = (arr) => {
  if(arr.length >1) {
    for(var i = 0; i< arr.length; i++) {
      let lowest = arr[i];
      let index = i;
      for(var j = i+1; j< arr.length; j++) {
        if(lowest > arr[j]) {
          lowest = arr[j];
          index = j;
        }
      }
      if(index !== i) {
        [arr[index], arr[i]] = [arr[i], arr[index]];
      }
    }
  }
  return arr;
}
