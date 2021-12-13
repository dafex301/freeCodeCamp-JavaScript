function checkCashRegister(price, cash, cid) {
	let newArr = [];
	let change = cash - price;

	// menghitung total yang ada di cid
	let totalCid = 0;
	for (let i = 0; i < cid.length; i++) {
		totalCid += cid[i][1];
	}
	totalCid = totalCid.toFixed(2);

	// memastikan kembalian cukup
	// kalau kembalian tidak cukup
	if (totalCid < change) {
		return { status: 'INSUFFICIENT_FUNDS', change: newArr };
	}
	// kalau kembalian pas
	else if (totalCid == change) {
		return { status: 'CLOSED', change: cid };
	}
	// kalau kembalian lebih dari cukup
	else {
		// inisialisasi nilai awal
		newArr = [
			['PENNY', 0],
			['NICKEL', 0],
			['DIME', 0],
			['QUARTER', 0],
			['ONE', 0],
			['FIVE', 0],
			['TEN', 0],
			['TWENTY', 0],
			['ONE HUNDRED', 0],
		];

		while (change > 0) {
			change = change.toFixed(2);
			if (change >= 100 && cid[8][1] >= 100) {
				cid[8][1] -= 100;
				change -= 100;
				newArr[8][1] += 100;
			} else if (change >= 20 && cid[7][1] >= 20) {
				cid[7][1] -= 20;
				change -= 20;
				newArr[7][1] += 20;
			} else if (change >= 10 && cid[6][1] >= 10) {
				cid[6][1] -= 10;
				change -= 10;
				newArr[6][1] += 10;
			} else if (change >= 5 && cid[5][1] >= 5) {
				cid[5][1] -= 5;
				change -= 5;
				newArr[5][1] += 5;
			} else if (change >= 1 && cid[4][1] >= 1) {
				cid[4][1] -= 1;
				change -= 1;
				newArr[4][1] += 1;
			} else if (change >= 0.25 && cid[3][1] >= 0.25) {
				cid[3][1] -= 0.25;
				change -= 0.25;
				newArr[3][1] += 0.25;
			} else if (change >= 0.1 && cid[2][1] >= 0.1) {
				cid[2][1] -= 0.1;
				change -= 0.1;
				newArr[2][1] += 0.1;
			} else if (change >= 0.05 && cid[1][1] >= 0.05) {
				cid[1][1] -= 0.05;
				change -= 0.05;
				newArr[1][1] += 0.05;
			} else if (change >= 0.01 && cid[0][1] >= 0.01) {
				cid[0][1] -= 0.01;
				change -= 0.01;
				newArr[0][1] += 0.01;
			} else return { status: 'INSUFFICIENT_FUNDS', change: [] };
		}
		return {
			status: 'OPEN',
			change: newArr.filter((arr) => arr[1] > 0).reverse(),
		};
	}
}

console.log(
	checkCashRegister(3.26, 100, [
		['PENNY', 1.01],
		['NICKEL', 2.05],
		['DIME', 3.1],
		['QUARTER', 4.25],
		['ONE', 90],
		['FIVE', 55],
		['TEN', 20],
		['TWENTY', 60],
		['ONE HUNDRED', 100],
	])
);
