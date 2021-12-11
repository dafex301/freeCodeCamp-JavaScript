function destroyer(arr) {
	const newArr = [...arr];
	for (let i = 1; i < arguments.length; i++) {
		for (let j = 0; j < newArr.length; j++) {
			if (newArr[j] == arguments[i] && newArr[j + 1] == arguments[i]) {
				newArr.splice(j, 2);
			} else if (newArr[j] == arguments[i]) {
				newArr.splice(j, 1);
			}
		}
	}
	return newArr;
}

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
