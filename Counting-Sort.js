function countingSort(arr)
  {
    var i, z = 0, count = [];
 
    for (i = 0; i <= arr.length; i++) {
        count[i] = 0;
    }
    
    console.log(count)
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = 0; i <= arr.length; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}
var arra = [30, 0, 20, 56, 4, 12]; 
console.log(arra.length);
console.log("Original Array Elements"); 
console.log(arra); 
console.log("Sorted Array Elements"); 
console.log(countingSort(arra));