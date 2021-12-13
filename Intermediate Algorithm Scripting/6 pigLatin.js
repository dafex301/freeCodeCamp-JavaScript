// huruf awal vokal
const vocalFirst = /^[aiueo]/;
const vocal = /[aiueo]/;

function translatePigLatin(str) {
	if (vocalFirst.test(str)) {
		return str + 'way';
	} else {
		// jika ada huruf vokal, tapi tidak di awal
		if (vocal.test(str)) {
			let vocalIndex;
			let newStr;

			// Mencari index dari vocal
			for (let i = 0; i < str.length; i++) {
				if (vocal.test(str[i])) {
					vocalIndex = i;
					break;
				}
			}

			// memanipulasi string
			newStr = str
				.slice(vocalIndex, str.length)
				.concat(str.slice(0, vocalIndex))
				.concat('ay');

			return newStr;

			// jika tidak ada huruf vokal
		} else {
			return str + 'ay';
		}
	}
}

console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('schwartz'));
console.log(translatePigLatin('rythm'));
