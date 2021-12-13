function pairElement(str) {
	const DNAs = [];
	let DNA = [];
	for (let i = 0; i < str.length; i++) {
		DNA = [];
		DNA.push(str[i]);
		if (str[i] == 'C') DNA.push('G');
		if (str[i] == 'G') DNA.push('C');
		if (str[i] == 'T') DNA.push('A');
		if (str[i] == 'A') DNA.push('T');
		DNAs.push(DNA);
	}
	return DNAs;
}

console.log(pairElement('GCG'));
