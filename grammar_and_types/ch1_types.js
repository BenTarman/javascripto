// javascript does have types but not in the static sense



//a type is an intrinsic, built-in set of characteristics that uniquely 
//identifies the behavior of a particular value

// 7 fucking types
// null
// undefined
// boolean
// number
// string
// object
// symbol (added in ES6)

console.log(typeof undefined)
console.log(typeof Symbol())

//function is also a subtype
//functions are objects basically
//arrays are just object type

console.log(typeof [1, 3, 2])

//In JavaScript, variables don't have types -- values have types. Variables can
//hold any value, at any time.


var a = 42;
typeof a; // "number"

a = true;
typeof a; // "boolean"

// undefined type
//variables with no value assigned to it are undefined biiitch

var noassign;
console.log(typeof noassign)

//undeclared means the variable doenst fucking exist
//undefined means the variable exist but doesn't hold a value


//shitty confusion example
/*
var a;

a; // undefined
b; // ReferenceError: b is not defined

typeof a //undefined
typeof b //undefined
*/

//practical?
/*
 * if (typeof DEBUG !== undefined) { code }


  another option is if (window.DEBUG) {code}
*/

//above approach makes sure we don't ever through refernece error
//and exit teh program, so this "buggy" behavior in JS is useful





































