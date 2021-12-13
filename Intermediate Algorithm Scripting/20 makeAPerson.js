class Person {
	constructor(firstAndLast) {
		// Only change code below this line
		let firstName = firstAndLast.split(' ')[0];
		let lastName = firstAndLast.split(' ')[1];
		// Complete the method below and implement the others similarly
		this.getFullName = function () {
			return firstName + ' ' + lastName;
		};
		this.getFirstName = function () {
			return firstName;
		};
		this.getLastName = function () {
			return lastName;
		};
		this.setFirstName = function (first) {
			firstName = first;
		};
		this.setLastName = function (last) {
			lastName = last;
		};
		this.setFullName = function (firstAndLast) {
			firstName = firstAndLast.split(' ')[0];
			lastName = firstAndLast.split(' ')[1];
		};
	}
}

const bob = new Person('Bob Ross');
console.log(Object.keys(bob).length);
