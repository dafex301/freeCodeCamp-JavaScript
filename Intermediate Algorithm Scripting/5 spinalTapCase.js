Array.prototype.insert = function (index, item) {
	this.splice(index, 0, item);
};

function spinalCase(str) {
	let newStr = [...str.replace(/\D&\W|\s|_/g, '-')];
	for (let i = 0; i < newStr.length; i++) {
		if (newStr[i] == newStr[i].toUpperCase()) {
			newStr[i] = newStr[i].toLowerCase();
			newStr.insert(i, '-');
			i++;
		}
	}
	return newStr.join('').replace(/--+/g, '-').replace(/^-/, '');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
