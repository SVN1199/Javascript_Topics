function hello({name,age}){
    console.log(`Hello ${name} !`);
    console.log(`age is ${age}`);
}
hello('Vasanth');

const names = {name:'Vasanth',age:23}
hello(names);

let numbers = [4,5,8,7];
function add([a,b,c,d]){
    return a+b+c+d;
}
console.log(add(numbers));

const details = {names:'vasanth',age:23,gender:'male',city:'cuddalore'}
function an(names,age,...rest){
    console.log(`name : ${names} age :${age}`)
}
an(details.names,details.age);