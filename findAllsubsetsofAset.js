function subset(arra, arra_size, desiredValue)
 {
    var result_set = [], 
        result;
    
   
for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
         sum = result.reduce((a,b)=> a+b);
         if(sum === desiredValue) {
           return true;
         } 
          result_set.push(result);
        }
    }

    return result_set; 
}

console.log(subset([2, 4, 8], 1, 145));