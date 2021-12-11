function diffArray(arr1, arr2) {
	const newArr = [];
	for (let i = 0; i < arr1.length; i++) {
		let j = 0;
		while (arr1[i] != arr2[j] && j < arr2.length) {
			j++;
		}
		if (arr1[i] != arr2[j]) newArr.push(arr1[i]);
	}
	for (let i = 0; i < arr2.length; i++) {
		let j = 0;
		while (arr2[i] != arr1[j] && j < arr1.length) {
			j++;
		}
		if (arr2[i] != arr1[j]) newArr.push(arr2[i]);
	}
	return newArr;
}

console.log(diffArray([], [1, 2, 3, 4, 5]));
