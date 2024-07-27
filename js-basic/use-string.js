var greet = "Hello, ";
var place = "World!";

// All strings have at their disposal several built-in properties

// length: 
greet.length; // 7

// To read each individual character at a specific index in a string
// we can use the charAt() method
greet.charAt(0); // "H"

// The concat() method joins two strings
"Wo".concat("rl").concat("d!"); // "World!"

// The indexOf() method returns the index of the first occurrence of a specified value in a string
"ho-ho-ho".indexOf("h"); // 0
"ho-ho-ho".indexOf("h", 1); // 3
// The lasteIndexOf() finds the last match, otherwise it works the same as indexOf()

// The split method chops up the string into an array of sub-strings
"ho-ho-ho".split("-"); // ["ho", "ho", "ho"]

// There are also some methods to change the case of a string
greet.toUpperCase(); // "HELLO, "
place.toLowerCase(); // "world!"