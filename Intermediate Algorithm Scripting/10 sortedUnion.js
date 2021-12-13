function uniteUnique(arr) {
	const newArray = [];
	for (let i = 0; i < arguments.length; i++) {
		for (let j = 0; j < arguments[i].length; j++) {
			if (!newArray.includes(arguments[i][j]))
				newArray.push(arguments[i][j]);
		}
	}
	return newArray;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])
// should return [1, 3, 2, 5, 4].
