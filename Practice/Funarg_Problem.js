console.clear();

/*function fun1(){
	var x = 3;
	function fun2(){
		console.log(x);
	}
	return fun2;
}
var x = 8;
var tmp = fun1();
console.dir(tmp);
tmp();*/

function fun1(){
	let counter = 0;
	function fun2(){
		counter++;
		return counter;
	}
	return fun2;
}

var inc = fun1();
var v1 = inc();
var v2 = inc();
var v3 = inc();
console.log(v1,v2,v3);