const convertSatuan = (num) => {
	let convert;
	switch (num) {
		case 1:
			convert = 'I';
			break;
		case 2:
			convert = 'II';
			break;
		case 3:
			convert = 'III';
			break;
		case 4:
			convert = 'IV';
			break;
		case 5:
			convert = 'V';
			break;
		case 6:
			convert = 'VI';
			break;
		case 7:
			convert = 'VII';
			break;
		case 8:
			convert = 'VIII';
			break;
		case 9:
			convert = 'IX';
			break;
		default:
			convert = '';
			break;
	}
	return convert;
};

const convertPuluhan = (num) => {
	let convert;
	switch (num) {
		case 1:
			convert = 'X';
			break;
		case 2:
			convert = 'XX';
			break;
		case 3:
			convert = 'XXX';
			break;
		case 4:
			convert = 'XL';
			break;
		case 5:
			convert = 'L';
			break;
		case 6:
			convert = 'LX';
			break;
		case 7:
			convert = 'LXX';
			break;
		case 8:
			convert = 'LXXX';
			break;
		case 9:
			convert = 'XC';
			break;
		default:
			convert = '';
			break;
	}
	return convert;
};

const convertRatusan = (num) => {
	let convert;
	switch (num) {
		case 1:
			convert = 'C';
			break;
		case 2:
			convert = 'CC';
			break;
		case 3:
			convert = 'CCC';
			break;
		case 4:
			convert = 'CD';
			break;
		case 5:
			convert = 'D';
			break;
		case 6:
			convert = 'DC';
			break;
		case 7:
			convert = 'DCC';
			break;
		case 8:
			convert = 'DCCC';
			break;
		case 9:
			convert = 'CM';
			break;
		default:
			convert = '';
			break;
	}
	return convert;
};

const convertRibuan = (num) => {
	let convert;
	switch (num) {
		case 1:
			convert = 'M';
			break;
		case 2:
			convert = 'MM';
			break;
		case 3:
			convert = 'MMM';
			break;
		default:
			convert = '';
			break;
	}
	return convert;
};

function convertToRoman(num) {
	const strNum = num.toString();
	console.log(strNum);
	let romawi = '';
	if (strNum >= 1000) {
		romawi += convertRibuan(parseInt(strNum[0]));
		romawi += convertRatusan(parseInt(strNum[1]));
		romawi += convertPuluhan(parseInt(strNum[2]));
		romawi += convertSatuan(parseInt(strNum[3]));
	}
	if (strNum >= 100 && strNum < 1000) {
		romawi += convertRatusan(parseInt(strNum[0]));
		romawi += convertPuluhan(parseInt(strNum[1]));
		romawi += convertSatuan(parseInt(strNum[2]));
	}
	if (strNum >= 10 && strNum < 100) {
		romawi += convertPuluhan(parseInt(strNum[0]));
		romawi += convertSatuan(parseInt(strNum[1]));
	}
	if (strNum >= 1 && strNum < 10) {
		romawi += convertSatuan(parseInt(strNum[0]));
	}
	console.log(romawi);
	return romawi;
}

convertToRoman(3);
