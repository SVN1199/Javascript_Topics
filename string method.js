let first_name = 'Vasanth';
let last_name = 'Kumar'

//concatenation
var c = first_name + " " + last_name;
console.log("concaenation " + " : " +  c);

//concat
var c = first_name.concat(' ', last_name);
console.log("concat " + " : " + c)

// append
c = "vasanth"
c += " kumar"  
console.log("append " + " : " + c);

//Escaping
c = 'she can\'t run';  // ( \ --> Escaping )
console.log("Escaping "+ " : " + c);

//length
c = first_name.length;
console.log("length" + " : " + c);

// indexof
c = first_name.indexOf('a');
console.log("indexOf : " + c);

// charAt
c = first_name.charAt(5);
console.log("charAt : " + c);

//charCodeAt
c = first_name.charCodeAt(3);
console.log("charCodeAt : " + c);

// change case
c = first_name + " " +last_name;
console.log("Uppercase " + " : " + c.toUpperCase());
c = first_name + " " +last_name;
console.log("Lowercase " + " : " + c.toLowerCase());

// substr
c = "0123456789";
console.log("substr : " + c.substr(0,3));

// substring
console.log("substring : " + c.substring(1,3)); // 12
console.log("substring : " + c.substring(4)); // 456789

//slice
console.log("slice : " + c.slice(-4)); // 6789
console.log("slice : " + c.slice(1,5)); // 12345
console.log("slice : " + c.slice(0,4)); // 0123

//split
c = "Vasanth is a Javascript Expert ";
c = c.split(" ")
console.log("split : " + c);
console.table(c);

// includes 
c = ['vasanth', 'Ram', 'Gunal', 'Kutty'];
console.log(c.includes('Ram')); // true
console.log(c.includes('Sam')); // false

// replace
c = "Ram is good devoloper ";
c = c.replace('Ram','Sam');
console.log("replace : " + c);

// trim
c = " Vasanth "
console.log("Before trim : " + c.length); // 9
console.log("After trim : " + c.trim(" ").length); //7

// padstart
c = "5";
console.log(c.padStart(4,0)); // 0005

// padend
c = "5";
console.log(c.padEnd(4,0)); // 5000


// long string literals
c = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, molestiae." + 
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias perferendis, facilis magnam repudiandae delectus consectetur ab a nulla ratione voluptatum animi deserunt cumque. Libero velit cumque voluptates eligendi necessitatibus."
console.log("longString : " + c);

// string fromcharcode
console.log("stringfromcharcode : "+ String.fromCharCode(101,54,65,87,98));

// template literals
let fname = "vasanth";
let age = 27;
let gender = "male";

output = `<hr>
<table border ="1">
<tr><th>Name</th><td>${fname}</td></tr>
<tr><th>age</th><td>${age}</td></tr>
<tr><th>Gender</th><td>${gender}</td></tr>
</table>`
document.body.innerHTML = output







