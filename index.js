

function myEach(collection, cb) {
  let collectionCopy ;
  Array.isArray(collection) === true ? collectionCopy = [...collection] : collectionCopy = [...Object.values(collection)];
  for(let element in collectionCopy) {
    cb(collectionCopy[element])
  }
  return collection;
}

function myMap(collection, cb) {
  let collectionCopy ;
  let newArray = []
  Array.isArray(collection) === true ? collectionCopy = [...collection] : collectionCopy = [...Object.values(collection)];
  for(let element in collectionCopy) {
    newArray.push(cb(collectionCopy[element]))
  }
  return newArray;
}

function myReduce(collection, cb, acc ){
  
  let collectionCopy ;
  Array.isArray(collection) === true ? collectionCopy = [...collection] : collectionCopy = [...Object.values(collection)];  
  acc = acc || collectionCopy.shift();
  for( let element in collectionCopy) {
   acc = cb(acc, collectionCopy[element] , collectionCopy)
  }

 return acc
}

function myFind(collection, predicate) {
    let collectionCopy ;
    Array.isArray(collection) === true ? collectionCopy = [...collection] : collectionCopy = [...Object.values(collection)];

    for(let value in collectionCopy){
    if (predicate(collectionCopy[value])) {
      // console.log(collectionCopy[value])
      // console.log(`This is value: ${value}`)
        return collectionCopy[value]
      }
  }
  
}

function myFilter(collection , predicate) {
  let collectionCopy ;
  let newArray = [] ;
  Array.isArray(collection) === true ? collectionCopy = [...collection] : collectionCopy = [...Object.values(collection)];

    for(let value in collectionCopy){
      if (predicate(collectionCopy[value])) {
          newArray.push(collectionCopy[value])
        }
    }
    return newArray;
}

function mySize(collection) {
  let collectionCopy ;
    Array.isArray(collection) === true ? collectionCopy = [...collection] : collectionCopy = [...Object.values(collection)];
  return collectionCopy.length
} 


function myFirst(array, n)  {
  let newArray = []
  if( n !== undefined) {
    for (let i = 0; i < n ; i++){
      newArray.push(array[i])
    }
    return newArray
  }
  return array[0]
}

function myLast(array , n) {
  let newArray = []
  if( n !== undefined) {
    for (let i = 1; i < (n + 1) ; i++){
      newArray.push(array[-i])
    }
    return newArray
  }
  return array[array.length - 1]
}
