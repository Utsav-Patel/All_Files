var first = [1,2,3];
var second = [4,5,6];

first.push(second);

console.clear();
console.log(...first);
console.log(first);

second.push(...second);
console.log(second);