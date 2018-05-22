console.clear();
_ = {
  transform: function(array,handleIteration,accumulator){   // transform function made by me.
    if(!Array.isArray(array)&&!(typeof(array)==`object`))          // if "array" variable is not array then return the function.
      throw 'first Argument is not an array or object';
    if(accumulator==null)          //  If accumulator is null then assign the null array.
      accumulator = [];
    if(Array.isArray(array)){
      for(let i=0;i<array.length;i++){
        const is = handleIteration(array[i]);       // Function that we want to execute.
        accumulator.push(is.val);
        if(!is.istrue)
          break;
        }
        return accumulator;
    }
    else{
      for(let i in array){
        console.log(i);
        console.log(array[i]);
          if(Array.isArray(accumulator[array[i]]))      // check if the given key is present in our object or not
            accumulator[array[i]].push(i);               // If it is then push the element otherwise make new array.
          else
            accumulator[array[i]] = [i];
      }
      return accumulator;
    }
  }
}

try{
  var accu = [];
  var exe = _.transform([2,3,4],(a) => {   // Call transform funtion
  	var ob = {
  		istrue: false,
  		val: a*a
  	};
  	if((a*a)%2==0)
  		ob.istrue = true;
  	return ob;                      // return the value and condition when do we need to break the for loop.
  },accu);
  console.log(exe);

  var exe2 = _.transform({'a':1,'b':2,'c':1},(a) => {return a},{});
  console.log(exe2);
}

catch(err){
  console.error('Error: '+err);
}
