// strictly equaliy or identity operator
let a = "10";
let b =  10 ;
console.log(a==b); // true
console.log(a===b); //false

let c = undefined;
let d = null;
console.log(c==d); // true
console.log(c===d); //false

let e =new String("Joes");
let f = "Joes";
console.log(e==f); // true
console.log(e===f); //false

let g = 1;
let h = true;
console.log(g==h); // true
console.log(g===h); //false
