// type conversion string

let a = 25;
console.log(a, typeof a);
a=String(a);
console.log(a,typeof a);

let b = true;
console.log(b, typeof b);
b=String(b);
console.log(b,typeof b);

let c = {'name':'vasanth','age':23};
console.log(c, typeof c);
c=String(c);
console.log(c,typeof c);

let d = new Date();
console.log(d, typeof d);
d=String(d);
console.log(d,typeof d);

let e = 45;
console.log(e, typeof e);
e=e.toString();
console.log(e,typeof e);