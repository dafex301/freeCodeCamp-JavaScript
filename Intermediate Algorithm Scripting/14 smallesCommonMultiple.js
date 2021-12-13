function fullArr(arr) {
	const newArr = [];
	let num;
	if (arr[0] > arr[1]) {
		num = arr[0];
		while (num >= arr[1]) {
			newArr.push(num);
			num--;
		}
	} else {
		num = arr[1];
		while (num >= arr[0]) {
			newArr.push(num);
			num--;
		}
	}
	return newArr;
}

function smallestCommons(arr) {
	let num = 1;
	let check = false;
	const newArr = fullArr(arr);
	while (check == false) {
		for (let i = 0; i < newArr.length; i++) {
			if (num % newArr[i] != 0) {
				num++;
				break;
			}
			if (newArr[i] == newArr[newArr.length - 1]) return num;
		}
	}
}

console.log(smallestCommons([23, 18]));
// smallestCommons([6, 5]);
