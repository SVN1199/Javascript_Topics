// creating objects in js

// 1. using object literals
let a = {
    name :'vasanth',
    age : 23,
    gender : 'male'
}
console.log("using object literals : ", a);

// 2. using object constructor
const obj = new Object();
obj.name = 'vasanth';
obj.age = 23 ;
obj.gender = 'male';
console.log("using object constructor : ", obj)

// 3. using the object create method
const protoObj = {
    sayHello : function(){
        console.log("Hello  I am ",this.name);
    }
}
const person = Object.create(protoObj)
person.name = 'vasanth',
person.age = 23,
person.gender = 'male';
console.log(" using the object create method : ",person)
person.sayHello();

// 4. using class

class Person{
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const person1 = new Person('Vasanth',23,'male');
console.log("using class : ",person1); 






