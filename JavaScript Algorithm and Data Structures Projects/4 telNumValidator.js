function regexCheck(str) {
	const regex1 = /^\d{3}-\d{3}-\d{4}$/;
	const regex2 = /^\(\d{3}\)\d{3}-\d{4}$/;
	const regex3 = /^\(\d{3}\)\s\d{3}-\d{4}$/;
	const regex4 = /^\d{3}\s\d{3}\s\d{4}$/;
	const regex5 = /^\d{10}$/;

	if (regex1.test(str)) return true;
	if (regex2.test(str)) return true;
	if (regex3.test(str)) return true;
	if (regex4.test(str)) return true;
	if (regex5.test(str)) return true;
	return false;
}

function telephoneCheck(str) {
	// kalau ada 1
	if (str[0] == '1') {
		if (str[1] == ' ') {
			return regexCheck(str.slice(2));
		}
		return regexCheck(str.slice(1));
	} else {
		return regexCheck(str);
	}
}

console.log(regexCheck('2 (757) 622-7382'));
