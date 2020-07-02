let HashTable = class {
 constructor(size) {
   this.size = size;
   this.dataStore = [];
 }
  
 hash(key) {
   let index = 0;
   for(let i =0; i< key.length; i++) {
     index += key.charCodeAt(key[i]);
   }
   return index % this.size;
 }
  
 add(key, value) {
   const index = this.hash(key);
   if(this.dataStore[index]) {
     if(this.dataStore[index].flat(Infinity).includes(key)) {
       throw new Error('The hashTable elements cannot have same Key');
     } else {
       if(Array.isArray(this.dataStore[index][0])) {
         this.dataStore[index].push([key, value]);
       } else {
         this.dataStore[index][0] = [this.dataStore[index][0],this.dataStore[index][1]];
         
         this.dataStore[index][1] =([key, value]);
       }
     }
   }else {
     this.dataStore[index]= [key,value];
   }
 }
 showData() {
   for(var i =0; i< this.dataStore.length; i++) {
     this.printArray(this.dataStore[i]);
   }
 }
  removeData(key) {
    for(var i =0; i< this.dataStore.length; i++) {
     this.deleteData(this.dataStore, key)
   }
  }
  deleteData(arr, key) {
    const index = this.hash(key);
    if(Array.isArray(this.dataStore[index])) {
      let temp = (this.dataStore[index])
      for(var i = 0; i< temp.length; i++) {
       if(this.dataStore[index][i] && this.dataStore[index][i][0] === key) {
         this.dataStore[index].splice(i,1);
         return;
       } 
      }
    } else {
     // delete this.dataStore[index];
    }
   
  }  
  printArray(x) {
    if(x && Array.isArray(x[0])) {
      for(var i = 0; i< x.length; i++) {
        this.printArray(x[i]);
      }
      return;
    }
    if(x && x[0] !== undefined) {
     console.log(x[0] +' : '+ x[1]); 
    }
  }
  
}

let ht = new HashTable(10);
ht.add('sd', 'dssd')
ht.add('sd1', 'dssd')
ht.add('my','dasdasda')

ht.add('qmy','dasdasda')
ht.add('emy','dasdasda')
ht.add('bmy','dasdasda')
ht.add('mby','dasdasda')
ht.add('amy','dasdasda')
ht.add('smy','dasdasda')
ht.add('fmy','dasdasda')
ht.add('tmy','dasdasda')
ht.add('hmy','dasdasda')
ht.add('gmy','dasdasda')
ht.removeData('gmy')
console.log(ht)

ht.showData();
ht.removeData('sd');
console.log(ht)
ht.showData();

