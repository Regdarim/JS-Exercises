//http://codepen.io/Regdarim/pen/zovgqL

//function make tabe from range of a and b(optionally can jump by 'c' in this range)
// and sum up this array
function sor(a,b,c){// function can take 3 or 2 arguments

 var tab2 = [];
for (var i =a; i <=b; i++){
	
	if(arguments.length > 2){ // if function has third argument jump index by 'c'
	tab2.push(i);
	i = i + c -1;
}
else{
	tab2.push(i);
}


}


	console.log(tab2);


	var sum = 0;
for( var i=0; i<tab2.length; i++){
	sum += tab2[i];
}
	return sum;
}

console.log(sor(1,10,2));