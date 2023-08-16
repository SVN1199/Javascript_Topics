// conditional or ternary operator
let a = 21;
let b = a>=18?"Eligible for vote":"Not Eligible for vote";
console.log(b);

//handling null value
function welcome(name){
    const result = name?name:"Unknown";
    console.log(result);
}
welcome();
welcome("vasanth");

user = {'name':'vasanth','age':23};
console.log(user.name);

const greet=(user)=>{
    const name = user.name?user.name:"No Name";
    return "Hello "+ name;
}

console.log(greet(user));

/*
 marks >90 - A grade
 marks >80 - B grade
 Else C grade
*/

const m = 90;
const grade = m>=90?"A grade":m>=80 && m<90?"B grade":"C grade";
console.log(grade);