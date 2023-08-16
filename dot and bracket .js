// dot notation and bracket notation

// dot notation
const user = {
    name : 'vasanth',
    age : 23,
    gender : 'male'
}
console.log("Dot Notation ",user.name);
console.log("Dot Notation ",user.age);
user.code = 221;
console.log("Dot Notation ",user.code);
console.log("Dot Notation ",user);

// bracket notation
console.log("Bracket Notation ",user["name"]);
console.log("Bracket Notation ",user["code"]);
user["vote"] = 18;
console.log("Bracket Notation ",user["vote"]);
console.log("Bracket Notation ",user);
const prop = ["name"];
console.log("Bracket Notation ",user[prop]);

let user1 = {
    'full name':'vasanth','last name':'kumar'
}
let keys = 'full name';
console.log("keys : ", user1[keys]);
