//http://codepen.io/Regdarim/pen/zoGmmN
// Your code here.
function countChar(yourString,searchedChar){
 var wieViel= 0;

 for(var i=0; i<yourString.length; i++){
  if(yourString[i] === searchedChar){
  wieViel += 1;
  }
}
  return wieViel;
}
//console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4