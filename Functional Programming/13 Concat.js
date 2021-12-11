function nonMutatingConcat(original, attach) {
	// Only change code below this line
	const newArr = [...original];
	return newArr.concat(attach);
	// Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
