function addTogether(x) {
	if (typeof arguments[0] != 'number') return undefined;
	if (arguments.length == 2) {
		if (typeof arguments[1] != 'number') {
			return undefined;
		}
		return x + arguments[1];
	} else {
		return function (y) {
			if (typeof y != 'number') return undefined;
			return x + y;
		};
	}
}

console.log(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
// console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));
// console.log(addTogether(2)([3]));
