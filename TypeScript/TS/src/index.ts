const x = 10;
console.log(x);

const username: string = 'abd elrhman';
console.log(username);

let str: string = 'hello world';
console.log(str);

let num: number = 10;
console.log(num);

const msg: () => string = () => {
  console.log('hello world');
  return 'hello';
};

const sum: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

const sumNum = (x: number, y: number) => {
  return x + y;
};

let result: number = sumNum(10, 5);
console.log(result);
////////////////////////////////////////////////////////////////

//create new Type
//Interface
interface Person {
  name: string;
  age?: number; // optional parameter
}
let person: Person = { name: 'Ali', age: 25 };
console.log(person);

// use Type to create myType
type myType = string | number;
let s: myType = 10;
console.log(s);

type myObj = { name: string; age?: number };
let obj: myObj = { name: 'Ali', age: 25 };
console.log(obj);
let age: number = obj.age!; // '!' i am sure it is a type(number|...)
age = obj.age ?? 0; // if not found value set 0 as default

// Enum
enum Status {
  initial = 'initial',
  paid = 'paid',
  cancelled = 'cancelled',
}
let paymentStatus: Status = Status.initial;
console.log(paymentStatus);

// Class
class myClass {
  model: string;
  year: number;
  constructor(model: string, year: number) {
    this.model = model;
    this.year = year;
  }
}

const objClass: myClass = new myClass('BMW', 2025);
console.log(objClass.model);

// Class
interface ICar {
  sayHello: () => void;
}
class Car implements ICar {
  sayHello() {
    console.log('Hello');
  }
}

// Generic
const sumNumber = <T>(number1: T, number2: T) => {
  console.log(number1 + ' + ' + number2);
};
sumNumber<number>(1, 10);
sumNumber<string>('ali', 'ahmed');

// inline type
const obj2: { name: string; age: number } = {
  name: 'ali',
  age: 25,
};
// flexible object type
const obj3: { [key: string]: any } = {
  name: 'ali',
  age: 25,
};
obj3.city = 'Egypt';

////////////////////////////////////////////////////////////////
// utile
// Omit -> without filed
interface iInterface {
  name: string;
  age: number;
  email: string;
}
interface iInterfaceWithOutEmail extends Omit<iInterface, 'email' | 'age'> {}
const newObj1: iInterfaceWithOutEmail = {
  name: 'ali',
};
// use Omit in Type
type tType = Omit<iInterface, 'email' | 'age'>;
//
// Pick -> get only filed
interface iInterfaceWithNameOnly extends Pick<iInterface, 'name'> {}
const newObj2: iInterfaceWithNameOnly = {
  name: 'ali',
};
// Partial -> make all filed optional
interface iInterfaceOptional extends Partial<iInterface> {}
const newObj3: iInterfaceOptional = {
  name: 'ali',
};

// Required -> make all filed Required
interface iInterfaceRequired extends Required<iInterface> {}
const newObj4: iInterfaceRequired = {
  name: 'ali',
  age: 25,
  email: 'ali@example.com',
};
// merge two interfaces
interface Job {
  jobTitle: string;
  salary: number;
}
interface Employee extends Required<Person>, Partial<Job> {}
const emp: Employee = {
  name: 'ali',
  age: 25,
  jobTitle: 'Software Engineer',
  salary: 50000,
};

type tEmployee = Person & Job;
const emp1: tEmployee = {
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


