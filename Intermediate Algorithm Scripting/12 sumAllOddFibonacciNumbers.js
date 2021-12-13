function sumFibs(num) {
	const arr = [];
	let a = 1;
	let b = 1;
	arr.push(a);
	arr.push(b);
	let c = a + b;
	arr.push(c);
	while (c <= num) {
		a = b;
		b = c;
		arr.push(c);
		c = a + b;
	}
	return arr.filter((a) => a % 2 == 1).reduce((a, b) => a + b);
}

console.log(sumFibs(75025));
