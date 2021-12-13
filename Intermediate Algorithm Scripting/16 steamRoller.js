function steamrollArray(arr, newArr = []) {
	arr.forEach((item) => {
		if (Array.isArray(item)) steamrollArray(item, newArr);
		else newArr.push(item);
	});
	return newArr;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
