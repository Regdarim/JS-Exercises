console.log(arrayToList([10, 20,30]));

function arrayToList (arr) {
    var list = null;
    for (var i = arr.length - 1; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        };
    }
    return list;
}

function prepend(value, rest){
	return value = value,
			rest = rest

}


console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
