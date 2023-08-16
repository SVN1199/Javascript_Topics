// primitive and reference data types

 a = 10;
 console.log("a : "+ a);
 b = a;
 a = 20;
console.log("a : "+ a);
console.log("b :" + b);

num = [10,20,60,40,50,80];
num2 = num;
console.log("num1 : ",num);
console.log("num2 : ",num2);
num2.push(50,40,60);
console.log("num2 : ",num2);

obj1 = {'name':'vasanth','age':23}
console.log("obj 1 : ",obj1);
obj2 = obj1;
console.log("obj2 : ",obj2);
obj3 = {'name':'Kutty','age':14}
console.log("obj 3 : ",obj3);
//const obj4 = Object.assign({},obj1,obj3);
obj4 = {...obj1,...obj2}
console.log("obj4 : ",obj4);

// multiple ways to clone an array in js
// concat 
orginalArray = [10,20,30,40];
clonedArray = [].concat(orginalArray);
console.log("concat : ",clonedArray);

//spread operator
orginalArray = [10,20,30,40];
clonedArray = [...orginalArray];
console.log("spread operator : ",clonedArray);

//slice
orginalArray = [10,20,30,40];
clonedArray = orginalArray.slice();
console.log("slice : ",clonedArray);

//array.from
orginalArray = [10,20,30,40];
clonedArray =Array.from(orginalArray);
console.log("Array.from : ",clonedArray);

//json
orginalArray = [10,20,30,40];
clonedArray =JSON.parse(JSON.stringify(orginalArray));
console.log("JSON : ",clonedArray);

// const 
const arr = ['Ram','Sam','Tiya']
console.log(arr);
arr.push('Ramya');
console.log(arr);









