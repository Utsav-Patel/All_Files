var firstName = "Utsav";
var lastName = `Patel`;
var drive = "go";

console.clear();
let name = {
	firstName,
	lastName,
	[drive]: function(){
		console.log(`Hello`);
	}
};

name.go();
console.log(name);
console.log(name["firstName"]);

