
console.clear();

function fun(){
	console.log(this.name);
}

var obj = {
	name: `Utsav`
};

Function.prototype.bind = function (){
	var fu = this;
	console.log(fun);
	if(arguments.length==0){
		console.error(`Context Argument is not given`);
		return this;
	}
	var Context = arguments[0];
	var otherArguments = Array.from(arguments).slice(1);
	return function (){
		return fu.apply(Context,otherArguments);
	}
}

var fun2 = fun.bind(obj);
console.log(fun2);
fun2();