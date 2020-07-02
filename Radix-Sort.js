
function getPosition(num, place){
    return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10;
}   // gives back bucket index  

function radixSort(arr){
    const max = Math.max(...arr).toString().length;
    for(let i=0;i<max;i++){
        let buckets = Array.from({length:10},()=>[]) // creating 10 empty arrays
        for(let j=0;j<arr.length;j++){   
            buckets[getPosition(arr[j],i)].push(arr[j]);
            //push the number into desiredß bucket
        }
        arr = [].concat(...buckets); 
    }
    return arr; 
}
console.log(radixSort([4,-50, -90, 933,-100, 233,-2,3222,1,7, -1,5]))







// My version just to get correct position of negative numbers

function getPosition(num, place){
 return  Math.floor(Math.abs(num)/Math.pow(10,place))% 10;
}   // gives back bucket index  


 function radixSort(arr){
   const max = Math.max(...arr).toString().length;
   let negNumbers = [];
   for(let i=0;i<max;i++){
       let buckets = Array.from({length:10},()=>[]) // creating 10 empty arrays
     for(let j=0;j<arr.length;j++){ 
     if(arr[j]<0) {
       negNumbers.push(Math.abs(arr[j]));
     } else {
       buckets[getPosition(arr[j],i)].push(arr[j]);
     }
          //push the number into desired bucket
     }
     arr = [].concat(...buckets); 
   }
   
   let arr2;
   if(negNumbers.length) {
     arr2 = radixSort(negNumbers).map(x => -x).reverse();
     return arr2.concat(arr);
   } else {
     return arr;
   }
   
}
console.log(radixSort([4,-50, -90, 933,-100, 233,-2,3222,1,7, -1,5]))
