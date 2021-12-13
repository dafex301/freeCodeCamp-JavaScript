const titleCase = (str) => {
	return str[0].toUpperCase() + str.slice(1);
};

function myReplace(str, before, after) {
	// kalau case string dan before sama DAN merupakan lowercase
	if (str.includes(before) && before.toLowerCase() == before) {
		return str.replace(before, after.toLowerCase());
	}
	// kalau case sama, DAN lowercase
	if (str.includes(before) && titleCase(before) == before) {
		return str.replace(before, titleCase(after));
	}
	// kalau case string beda, DAN before lowercase (berarti string title case)
	else if (!str.includes(before) && before.toLowerCase() == before) {
		return str.replace(titleCase(before), titleCase(after));
	}
	// kalau case string beda, DAN before uppercase (berarti string lowercase)
	else {
		return str.replace(before.toLowerCase(), after.toLowerCase());
	}
}

console.log(myReplace('He is Sleeping on the couch', 'Sleeping', 'sitting'));
