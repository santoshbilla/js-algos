function dutch_flag_sort(balls) {
       var low = 0;
       var mid =0;
       var high = balls.length-1;
    while(mid<=high) {
        if(balls[mid] ==='R'){
          if(mid ===0) {
            mid++;
          } else {
            [balls[mid], balls[low]]=[balls[low], balls[mid]];
            low++;
          }        
        } else if(balls[mid]==='B') {
          [balls[mid], balls[high]]=[balls[high], balls[mid]];
           high--;    
        } else if(balls[mid]==='G') {
          mid++;
        }
    }
    return balls;
}

function dutch_numbers(balls) {
  var low = 0;
       var mid =0;
       var high = balls.length-1;
    while(mid<=high) {
        if(balls[mid] ===0){
          if(mid ===0) {
            mid++;
          } else {
            [balls[mid], balls[low]]=[balls[low], balls[mid]];
            low++;
          }        
        } else if(balls[mid]===2) {
          [balls[mid], balls[high]]=[balls[high], balls[mid]];
           high--;    
        } else if(balls[mid]===1) {
          mid++;
        }
    }
    return balls;
}

let n = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

console.log(dutch_numbers(n))
let x = ['G','B','R','G','B','R','G','B','R','G','B','R','G','B','R']

let y = ['B','R']
//let z = ['G', 'G', 'B', 'B', 'R', 'R']
console.log(dutch_flag_sort(x))
console.log(dutch_flag_sort(y))
//console.log(dutch_flag_sort(z))

let z = ['G', 'B'];

console.log(dutch_flag_sort(z))