// for of loop
let a = ['ramu','vasanth','gunal','ramya','swetha'];
for(let names of a){
    console.log(names);
}

// for in loop

let b = {
    "names":"vasanth",
    "age":27,
    "gender":"male"
}

for(let prop in b){
    console.log(prop + " : " + b[prop])
}
