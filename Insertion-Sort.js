let insertionSort = (arr) => {
  for(var i=0; i< arr.length; i++) {
    let el = arr[i];
    for(var j= i-1; j>=0 && arr[j]> el; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = el;
  }
  return arr;
}