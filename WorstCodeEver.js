
///here is my overcomplicated, dumb as shit solution to reverse array in place

function reverseArray(insertTab){// reversing with creating new table
	var revTab = [];
	for( var i=insertTab.length; i>0; i-- ){
		revTab.push(i)
	}
	return revTab;
}

console.log(swapArray([1,2,3,4,5,6,7]));

function swapArray(insertTab){ 
	var half = Math.floor(insertTab.length/2); // finding the middle to have an anchor 
	var secondHalf = []; // creating a buffor array 
	for (i=insertTab.length-1; i>half; i--){
		secondHalf.push(insertTab[i]);// populating buffor array
	}
	insertTab = insertTab.slice(0,half+1);//slicing second part
	var constLen = insertTab.length;
	for(i=constLen-2; i>= 0; i--){ //reversing first part beside middle one 
		insertTab.push(insertTab[i]);
	}
	insertTab = insertTab.slice(half);	// slicing first part ... but remember - its still the same array!!! mofo's
	insertTab = secondHalf.concat(insertTab); /// concatenate two tables 

	
	return insertTab;// here is an end of this misery and read of shame...
}

// Now, I hereby introduce the best solutions found on the internet, done by people way smarter than me and yes
// I should be exterminated and forgotten, or remembered as an anegdot for children, ' behave yourself, or you
// become HIM(HaveNo Intelligence Monster)'

let array = [1, 2, 3, 4, 5]; // hipster using his 'let' declaration 

 for(let i = 0; i<Math.floor((array.length)/2); i++){  // finding the middle
     var pointer = array[i];// this is his secret sauce!!! having var to keep i that is to be deleted
     array[i] = array[ (array.length-1) - i]; // he takes last one  and assign it to first 
     array[(array.length-1) - i] = pointer; // now he take ace from his sleeve and put it at the end of an array
 }

 console.log(array); // oh, it's so sexy solution.
 //[ 5, 4, 3, 2, 1 ]

// and here is another - one of those...those you look and you think some alien came and shit some random shit and then it
// turns out to be some technology from future that lets you... do stuff from the future.

for (var i = 0, j = arr.length - 1; i < j; i++, j--) { //.. it just looked so scary, but it's the same resoning like dudes above
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}










