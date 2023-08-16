let arr = [10,20,30,40,50,60];
console.log(arr);

let a = ["name",23,true,{'name':'vasanth','age':23}]
console.table(a);

// forEach
let users = [10,20,30,40,true,'vasanth'];
console.table(users);
users.forEach((value)=>{
    console.log(value);
})

let n = ['vasanth',23,true,'male']
n.forEach((value,index)=>{
    console.log(value);
})

let members = [
    {'name':'vasanth','age':23,'gender':'male'},
    {'name':'kutty','age':14,'gender':'male'},
    {'name':'ramya','age':25,'gender':'female'},
    {'name':'ramu','age':16,'gender':'male'}
]
console.log(members);
console.table(members);
members.forEach((value,index)=>{
    console.log(value.name +" "+ value.age);
   
})

// map(value,(index,array)->optional)
let num = [1,2,3,4,5,6,7,8,9];
let sqrt = num.map((value)=>{
    return Math.sqrt(value).toFixed(2);
})
console.table(sqrt);

let vote = [
    {'name':'vasanth','age':23,'gender':'male'},
    {'name':'kutty','age':14,'gender':'male'},
    {'name':'ramya','age':25,'gender':'female'},
    {'name':'jagan','age':20,'gender':'male'},
    {'name':'geetha','age':24,'gender':'female'}
]

let stat = vote.map((values)=>({
    name : values.name,
    age : values.age,
    gender : values.gender,
    status : values.age>=18?"Eligible":"Not Eligible"
}))
console.table(stat);

let poll = vote.map((values)=>({
    ...values,
    status : values.age>=18?"Eligible":"Not Eligible"
}))
console.table(poll);

// slice
let sl = [10,20,30,40,50,60,70,80,90,100]
console.log(sl.slice());
console.log(sl.slice(2));
console.log(sl.slice(2,5));

//splice
let n1 = [10,20,30,40,50,60,70,80,90];
console.log("Before splice  : " + n1);
var removed_items = n1.splice(4);
console.log("removed_items : " + removed_items); //50,60,70,80,90
console.log("After splice : " + n1); // 10,20,30,40

console.log("--------------------------------------------------------")

let s1 = [10,20,30,40,50,60,70,80,90];
console.log("Before splice  : " + s1);
var removed_items = s1.splice(2,3);
console.log("removed_items : " + removed_items); 
console.log("After splice : " + s1);

console.log("--------------------------------------------------------")

let m1 = [10,20,30,40,50,60,70,80,90];
console.log("Before splice  : " + m1);
var removed_items = m1.splice(2,3,[10,20,30]);
console.log("removed_items : " + removed_items); 
console.log("After splice : " + m1);
console.table(m1);

console.log("--------------------------------------------------------")

// concat
let a1 = [10,20,30]
let a2 = [40,50,60]
let a3 = [70,80,90]
var d = a1.concat(a2,a3);
console.table(d);
var d = d.concat(10,54,45,68,98,6,78);
console.table(d);

console.log("--------------------------------------------------------")

// sort
let s = [10,20,87,40,65,60,70,80,90,100]
s.sort((a,b)=>{
    return a-b;
});
console.log(s)

s.sort((a,b)=>{
    return b-a;
});
console.log(s)

let v = [
    {'name':'vasanth','age':23,'gender':'male'},
    {'name':'kutty','age':14,'gender':'male'},
    {'name':'ramya','age':25,'gender':'female'},
    {'name':'jagan','age':20,'gender':'male'},
    {'name':'geetha','age':24,'gender':'female'}
]
v.sort((a,b)=>{
    return a.age-b.age;
})
console.table(v)

v.sort((a,b)=>{
    return b.age-a.age;
})
console.table(v)

//fill(value,start,end)
var fil = [10,20,30,40,50]
console.log("Before Fill : " + fil)
fil.fill(20);
console.log("After fill : "+fil)

// includes
var i = ['ram','sam','vasanth','kumar'];
console.log("Before : "+i);
console.log("After : " + i.includes('ram',2)) //false
console.log("After : " + i.includes('ram',0)) // true

console.log("-----------------------------------------");

// join
var g = [1,5,6,8,4,3,6];
console.log("Before : " + g);
console.log("After : " + g.join());
console.log("After : " + g.join(" "));
console.log("After : " + g.join("|"));

console.log("-----------------------------------------");

// reverse
var g = [1,5,6,8,4,3,6];
console.log("Before : "+g);
g.reverse()
console.log("After : "+g);

const x = {0:10, 1:20, 3:30, 4:50,length:4};
console.log(x);
Array.prototype.reverse.call(x);
console.log(x);

// push 
var g = [10,2,30,40,50,60]
console.log("Before : " + g );
g.push(10,50,60,80);
console.log("After : "+ g);

var g = ['Ram', 'Vasanth','Gunal','Kutty']
console.log("Before : " + g );
console.log(g.push('Geetha','Kavitha'));
console.log("After : "+ g);

// merging two arrays using push
let user1 = ['vasanth','kutty']
let user2 = ['Geetha','Ramya']
user1.push(...user2);
console.log("merging two arrays using push : "+ user1);

// pop
var g =['Ram','Kumar','Kutty','Vasanth']
console.log(g.pop());
console.log(g);

// shift
var g =['Ram','Kumar','Kutty','Vasanth']
console.log(g.shift());
console.log(g);

//unshift
var g =['Ram','Kumar','Kutty','Vasanth']
console.log("Before : "+ g);
console.log(g.unshift('Geetha'));
console.log("After :" + g);

// indexOf
var g =['Ram','Kumar','Kutty','Vasanth']
console.log(g.indexOf('Ram'));
console.log(g.indexOf('Gunal'));

let gname = "Vasanth";
console.log(gname.indexOf('a'))
console.log(gname.indexOf('a',2))

//lastindexof
var jname = "Vasanth";
console.log("indexof : " + jname.indexOf('a'))
console.log("lastindexof : " + jname.lastIndexOf('a'))

var jname = "Vasanth is a good boy a";
console.log("indexof : " + jname.indexOf('a'));
console.log("lastindexof : " + jname.lastIndexOf('a'));

// every and some
var number = [10,20,50,70,90];
var m = number.every((value)=>{
    return value%2==0
});
console.log("every : " + m);  // true

var number = [10,20,50,65,90];
var m = number.every((value)=>{
    return value%2==0
});
console.log("every : " + m);  // false

var number = [10,20,50,65,90];  // any one staisfied
var m = number.some((value)=>{
    return value%2==0
});
console.log("some : " + m);  // true

var number = [10,20,50,66,90]; 
function checkEven(value){
    return value%2==0;
}
console.log(number.every(checkEven));

var number = [10,20,45,67,90]; 
function checkEven(value){
    return value%2==0;
}
console.log(number.some(checkEven));

var number = [
    {'name':'vasanth','age':23,'gender':'male'},
    {'name':'ramu','age':20,'gender':'male'},
    {'name':'kutty','age':17,'gender':'male'},
    {'name':'ramya','age':25,'gender':'female'},
];
function checkStatus(value){
    return value.age>=18
}
console.log(number.every(checkStatus)); // false
console.log(number.some(checkStatus)); // true








