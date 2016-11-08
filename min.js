// Your code here.
function min(a,b){
  var min = 0;
  if(a<b){
    min = a;
  }else{
      min= b;
  }
  return min;
}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10