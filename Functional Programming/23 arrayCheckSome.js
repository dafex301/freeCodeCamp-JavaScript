function checkPositive(arr) {
	// Only change code below this line
	return arr.some(function (val) {
		return val >= 0;
	});
	// Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);
