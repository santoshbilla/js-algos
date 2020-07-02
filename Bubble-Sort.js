let bubbleSort = (arr) => {
  for(var i=0; i< arr.length; i++) {
    for(var j=0; j< arr.length-i; j++) {
      if(arr[j+1]< arr[j]){
        //Swap
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      }
    }
  }
  return arr;
}
