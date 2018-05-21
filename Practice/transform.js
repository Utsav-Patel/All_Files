console.clear();
_ = {
  transform: function(array,handleIteration,accumulator){   // transform function made by me.
    if(!Array.isArray(array))          // if "array" variable is not array then return the function.
      return ;
    if(accumulator==null)          //  If accumulator is null then assign the null array.
      accumulator = [];
  	for(let i=0;i<array.length;i++){
  		const is = handleIteration(array[i]);
  		accumulator.push(is.val);
  		if(!is.istrue)
  			break;
  	}
  	return accumulator;
  }
}

var j = [];
var bn = _.transform([2,6,4],(a) => {   // Call transform funtion
	var ob = {
		istrue: false,
		val: a*a
	};
	if((a*a)%2==0)
		ob.istrue = true;
	return ob;
},j);

console.log(bn);
