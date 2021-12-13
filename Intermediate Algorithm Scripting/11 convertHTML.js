function convertHTML(str) {
	let newStr = str;
	if (newStr.includes('&')) {
		newStr = newStr.replace('&', '&amp;');
	}
	for (let i = 0; i < newStr.length; i++) {
		if (newStr.includes('<')) newStr = newStr.replace('<', '&lt;');
		if (newStr.includes('>')) newStr = newStr.replace('>', '&gt;');
		if (newStr.includes('"')) newStr = newStr.replace('"', '&quot;');
		if (newStr.includes("'")) newStr = newStr.replace("'", '&apos;');
	}
	return newStr;
}

console.log(convertHTML('Sixty > twelve'));
