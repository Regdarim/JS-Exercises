
//CODEPEN  http://codepen.io/Regdarim/pen/JbdvjV


// Your code here.
function isEven(n){

if(n===0){
 return true;
}
else if(n===1){
 return false; 
}
else if(n<0){
 return isEven(n+2);
}
else{
  return isEven(n-2);
}
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-11));
// → ??