var [,b] = [{              // we can access the second element using the syntax which is shown here.
	color: `blue`,
	firstName: `Utsav`,
	lastName: `Patel`
},
{
	color: `blue`,
	firstName: `Mihir`,
	lastName: `Patel`
}
];

console.log(b);

var [f,,,,fi] = [`a`,`b`,`c`,`d`,`e`];   //.  Access first and fifth element from the array.
console.log(f,fi);

console.log(b.color);