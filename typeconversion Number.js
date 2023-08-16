// type conversion Number

let a = 25.55;
console.log(a, typeof a);
a=Number(a);
console.log(a,typeof a);

let n = 25.55;
console.log(n, typeof n);
n=parseInt(n);
console.log(n,typeof n);

let m = 25.55;
console.log(m, typeof m);
m=parseFloat(m);
console.log(m,typeof m);

let b = true;
console.log(b, typeof b);
b=Number(b);
console.log(b,typeof b);

let c = {'name':'vasanth','age':23};
console.log(c, typeof c);
c=Number(c);
console.log(c,typeof c);

let d = new Date();
console.log(d, typeof d);
d=Number(d);
console.log(d,typeof d);

let e = 45;
console.log(e, typeof e);
e=Number(e);
console.log(e,typeof e);

let f =[1,2,3,4,5];
console.log(f,typeof f);
f=Number(f);
console.log(f,typeof f);

let g ="25";
console.log(g,typeof g);
g=Number(g);
console.log(g,typeof g);