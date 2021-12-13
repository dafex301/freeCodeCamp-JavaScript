function dropElements(arr, func) {
	let index;
	let check = false;
	for (let i = 0; i < arr.length; i++) {
		if (func(arr[i])) {
			index = i;
			check = true;
			break;
		}
	}

	if (check) return arr.slice(index);
	return [];
}

console.log(
	dropElements([1, 2, 3, 4], function (n) {
		return n > 5;
	})
);
