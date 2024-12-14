"use strict";
var _a;
const x = 10;
console.log(x);
const username = 'abd elrhman';
console.log(username);
let str = 'hello world';
console.log(str);
let num = 10;
console.log(num);
const msg = () => {
    console.log('hello world');
    return 'hello';
};
const sum = (x, y) => {
    return x + y;
};
const sumNum = (x, y) => {
    return x + y;
};
let result = sumNum(10, 5);
console.log(result);
let person = { name: 'Ali', age: 25 };
console.log(person);
let s = 10;
console.log(s);
let obj = { name: 'Ali', age: 25 };
console.log(obj);
let age = obj.age; // '!' i am sure it is a type(number|...)
age = (_a = obj.age) !== null && _a !== void 0 ? _a : 0; // if not found value set 0 as default
// Enum
var Status;
(function (Status) {
    Status["initial"] = "initial";
    Status["paid"] = "paid";
    Status["cancelled"] = "cancelled";
})(Status || (Status = {}));
let paymentStatus = Status.initial;
console.log(paymentStatus);
// Class
class myClass {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
}
const objClass = new myClass('BMW', 2025);
console.log(objClass.model);
class Car {
    sayHello() {
        console.log('Hello');
    }
}
// Generic
const sumNumber = (number1, number2) => {
    console.log(number1 + ' + ' + number2);
};
sumNumber(1, 10);
sumNumber('ali', 'ahmed');
// inline type
const obj2 = {
    name: 'ali',
    age: 25,
};
// flexible object type
const obj3 = {
    name: 'ali',
    age: 25,
};
obj3.city = 'Egypt';
const newObj1 = {
    name: 'ali',
};
const newObj2 = {
    name: 'ali',
};
const newObj3 = {
    name: 'ali',
};
const newObj4 = {
    name: 'ali',
    age: 25,
    email: 'ali@example.com',
};
const emp = {
    name: 'ali',
    age: 25,
    jobTitle: 'Software Engineer',
    salary: 50000,
};
const emp1 = {
    name: 'ali',
    age: 25,
    jobTitle: 'Software Engineer',
    salary: 50000,
};
////////////////////////////////////////////////////////////////
//Promise
// const myFun = async () => {
//   return 'hello world';
// };
// const res = await myFun();
////////////////////////////////////////////////////////////////
//  
