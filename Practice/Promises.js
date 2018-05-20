
console.clear();
var d = new Promise((a,b) => {
	if(true)
		a('hello');
	else
		b('bye');
});
// Here either Promise execute a or b. If it execute a then it will call the then statement otherwise
// it will call the catch statement. Either one of the statement execute at a time. whenever error occurs,
// Promise all execute catch statement which is shown in the code.
d.then(data => {
	console.log(`success: ${data}`);
	return `Hello2`;
}).then(data => console.log(`success2: ${data}`)).
catch(error => console.log(`error: ${error}`));