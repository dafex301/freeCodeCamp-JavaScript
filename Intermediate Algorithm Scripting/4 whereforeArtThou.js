// function whatIsInAName(collection, source) {
// 	const srcKeys = Object.keys(source);

// 	return collection.filter((obj) => {
// 		for (let i = 0; i < srcKeys.length; i++) {
// 			if (obj[srcKeys[i]] != source[srcKeys[i]]);
// 		}
// 		return true;
// 	});
// }

function whatIsInAName(collection, source) {
	const newArr = [];
	const srcKeys = Object.keys(source);

	for (let i = 0; i < collection.length; i++) {
		let push = true;
		for (let j = 0; j < srcKeys.length; j++) {
			if (collection[i][srcKeys[j]] != source[srcKeys[j]]) {
				push = false;
			}
		}
		if (push) newArr.push(collection[i]);
	}
	return newArr;
}

console.log(
	whatIsInAName(
		[{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
		{ apple: 1, bat: 2 }
	)
);
