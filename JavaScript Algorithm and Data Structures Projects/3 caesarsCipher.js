function rot13(str) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (/\w/.test(str[i])) {
			if (str[i] < 'N') {
				newStr += String.fromCharCode(str[i].charCodeAt(0) + 13);
			} else {
				newStr += String.fromCharCode(str[i].charCodeAt(0) - 13);
			}
		} else {
			newStr += str[i];
		}
	}
	return newStr;
}

console.log(rot13('SERR PBQR PNZC'));
console.log(String.fromCharCode('A'.charCodeAt(0) + 13));
console.log(String.fromCharCode('N'.charCodeAt(0) - 13));
