let bucketSort = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  
  let bucketsLen = Math.floor((max-min)/arr.length) + 1;
  let buckets = Array.from({length: bucketsLen}, ()=> []);
  
  arr.forEach((x) => {
    let index = Math.floor((x-min)/arr.length);
    buckets[index].push(x);
  });
  
  buckets.forEach(x => insertionSort(x));
  
  return buckets.flat();
  
}

function insertionSort(array) {
  var length = array.length;
  
  for(var i = 1; i < length; i++) {
    var temp = array[i];
    for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j+1] = array[j];
    }
    array[j+1] = temp;
  }
  
  return array;
}

let myArray = [10, 5, 1, 8, 190, 5,2, 3, 7];
console.log(bucketSort(myArray, 5))
