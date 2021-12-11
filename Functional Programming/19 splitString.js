function splitify(str) {
	// Only change code below this line
	const regex = /\W/g;
	return str.split(regex);

	// Only change code above this line
}

console.log(splitify('Hello World,I-am code'));
