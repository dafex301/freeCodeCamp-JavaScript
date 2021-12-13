function orbitalPeriod(arr) {
	const newArr = [];
	const GM = 398600.4418;
	const earthRadius = 6367.4447;
	const a = 2 * Math.PI;

	const getOrbPeriod = (obj) => {
		const beforeResult = Math.pow(earthRadius + obj.avgAlt, 3) / GM;
		const result = Math.round(a * Math.sqrt(beforeResult));
		return { name: obj.name, orbitalPeriod: result };
	};

	for (let i in arr) {
		newArr.push(getOrbPeriod(arr[i]));
	}

	return newArr;
}

console.log(orbitalPeriod([{ name: 'sputnik', avgAlt: 35873.5553 }]));
console.log(
	orbitalPeriod([
		{ name: 'iss', avgAlt: 413.6 },
		{ name: 'hubble', avgAlt: 556.7 },
		{ name: 'moon', avgAlt: 378632.553 },
	])
);
