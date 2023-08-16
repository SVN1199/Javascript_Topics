// functions
console.log('functions');
function add(a,b){
    return a+b;
}
console.log(add(5,6))

// in-built function is argument
function sum()
{
    let total = 0;
    for(let i=0; i<arguments.length; i++){
        total+=arguments[i];
    }
    return total;
}
console.log(sum(5,7,9,8,4));

//spread operator
function addition(...args){
    let total = 0;
    for(let i=0; i<args.length; i++){
        total+=args[i];
    }
    return total;
}
console.log(addition(54,5,4,8,8,6));

// Function as Expression
const adds = function add(...args){
    let total = 0;
    for(let i=0; i<args.length; i++){
        total+=args[i];
    }
    return total;
}
console.log(adds(5,6,8,9,7,8,5));

// arrow function
const mul = (a,b) =>{
    return a*b;
}
console.log(mul(5,6));

//map using arrow function
var arr = [1,2,3,4,5,6]
console.log("Befor map : ",arr);
console.log("After map : ",arr.map((values)=>{return values*2}))

//filter using arrow function 
var arr = [19,20,35,44,54,18,14,16]
console.log(arr.filter((values)=>{return values>=18}))

// reduce using arrow function
var arr = [1,2,3,4,5];
console.log(arr.reduce((sum,number)=>(sum+number)));

// using arrow function to create a closure
const arrows = ()=>{
    let count = 0;
    return ()=>{
        count++;
        return count;
    }
}
let counter = arrows();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
counter();
counter();
counter();
counter();
counter();
counter();