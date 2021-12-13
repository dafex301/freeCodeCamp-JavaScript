function isPrime(n) {
	if (n <= 1) return false;
	for (let i = 2; i < n; i++) {
		if (n % i == 0) return false;
	}
	return true;
}

function sumPrimes(num) {
	let sum = 0;
	while (num > 1) {
		if (isPrime(num)) {
			sum += num;
		}
		num--;
	}
	return sum;
}

console.log(sumPrimes(977));
