function iterativeLog(array) {
  array.forEach(function(element, index){
   console.log(`${index}: ${element}`);
 });
}

function iterate(callback){
  array = ['hello', 'world'];
  array.forEach(callback);
  return array;  
}

function doToArray(array, callback){
  array.forEach(callback);
}
