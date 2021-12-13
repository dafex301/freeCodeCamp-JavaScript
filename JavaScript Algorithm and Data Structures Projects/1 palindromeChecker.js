function palindrome(str) {
	const newStr = str.replace(/\W|\s|_/g, '').toLowerCase();
	const revStr = newStr.split('').reverse().join('');
	return newStr == revStr;
}

palindrome('  e  ye  -_*');
