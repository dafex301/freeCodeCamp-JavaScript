const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function fearNotLetter(str) {
	// kalau string urut alphabet
	if (alphabet[0] == str[0]) {
		for (let i = 0; i < str.length; i++) {
			if (alphabet[i] !== str[i]) return alphabet[i];
		}
	}
	// string tidak urut
	else {
		const index = alphabet.indexOf(str[0]);
		for (let i = 0; i < str.length; i++) {
			if (alphabet[i + index] !== str[i]) return alphabet[i + index];
		}
	}
}

console.log(fearNotLetter('bcdf'));
