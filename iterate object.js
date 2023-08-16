// Iterating through Javascript Objects

const users = {
    name:'vasanth',
    age : 23,
    gender : 'male'
}

// using for in loop
for(let user in users){
    console.log(`${user} : ${users[user]}`)
}

console.log("-----------------------------------")

// using Object.keys()
const key = Object.keys(users);
key.forEach((value)=>{
    console.log(`${value} : ${users[value]}`)
})

console.log("-----------------------------------")

// using Object.values()
const value = Object.values(users); 
value.forEach((values)=>{
    console.log(`${values}`)
})

console.log("-----------------------------------")

// using Object.entries
const entries = Object.entries(users);
console.log(entries);
entries.forEach((entry)=>{
    console.log(`${entry[0]} : ${entry[1]}`)
})


// object inside array in js
let obj = [
    {name :'vasanth',age:23,gender:'male'},
    {name:'Kutty',age:21,gender:'male'},
    {name:'Gunal',age:20,gender:'male'},
]
console.log(obj);
for(const i of obj){
    console.log(i.age);
}

const vote = obj.filter(value=> value.age>=23)
console.log(vote);

