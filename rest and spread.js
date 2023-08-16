// rest parameter and spread operator in js


// rest parameter
function name(first, second, ...third){
    console.log(first);
    console.log(second);
    console.log(third);
}
name('ram','vasanth','kutty','gunal','ramya','geetha','tiya');

// spread operator
let a = [10,20,30]
let myArray = [...a,50,60,40,80];
console.log(myArray);
