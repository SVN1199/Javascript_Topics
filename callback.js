function names(){
    console.log("Call Back function")
}

function higherorder(nams){
 nams();
}
higherorder(names)

setInterval(function nam(){
    console.log("Hello");
},3000)

setTimeout(function nam(){
    console.log("Hello");
},3000)

const numbers = [10,20,30,40];
numbers.forEach(function name(){
    console.log("Hello Callback");
})
console.log("Callback : ",numbers)