// destructuring array
let arr = [10,20,30,40,50,60,70];
let [a,b,c] = arr;
console.log(a);
console.log(b);
console.log(c);

[a,b,...c] = arr;
console.log("a : ",a);
console.log("b : ",b);
console.log("c : ",c);

let nested_array = [[1,2],[4,5],[7,8]];
let [[m,n],[o,p],[q,r]] = nested_array;
console.log("m : ",m);
console.log("n : ",n);
console.log("o : ",o);
console.log("p : ",p);
console.log("q : ",q);
console.log("r : ",r);


// array destructing in nested object
var address = {
    city : 'salem',
    zip :'607303'
}
var employee ={
    name:'vasanth',
    age:23,
    gender:'male',
    address
}

var{name,age,gender='unknown',address:{city,zip}} = employee;
console.log('name : ',name);
console.log('age : ',age);
console.log('gender : ',gender);
console.log('city : ',city);
console.log('zip : ',zip);