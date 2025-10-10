// Objects

// let user={
//     name: 'Gunjan',
//     age: 20,
//     'Hello world': true,
//     '4a': 5
// }

// console.log(user.name);
// delete user.age;
// console.log(user['name']);
// console.log(user['4a']);


// key and values in object and accessing them through dot and square brackets..

// let value='5';

// let num={
//     [value]: 3
// }

// console.log(num);

// let obj={}

// obj.__proto__ = 5;
// console.log(obj.__proto__);
// console.log(obj)


// let user = { name: "John", age: 30 };

// console.log( "age" in user ); // true, user.age exists
// console.log( "blabla" in user );  //false user.blabla does not exists


// for in loop
// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true
// };

// for (let key in user) {
//   // keys
//   console.log( key );  // name, age, isAdmin
//   // values for the keys
//   console.log( user[key] ); // John, 30, true
// }


// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   // ..,
//   "1": "USA",
//    name: 'Gunjan',
//    age: 20,
//    5: 12,
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// console.log(typeof(Math.trunc(+43)));

// let user={};

// user.name='John'
// user.surname='Smith'
// user.name='Pete'
// delete user.name;

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// function isEmpty(obj){
//     for(let key in obj) return false;
//     return true;
// }
// const user={}
// user['name']= 'Gunjan'
// console.log(isEmpty(user));

// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// // If salaries is empty, then the result must be 0.
// let sum=0;
// for( let key in salaries){
//     sum+=salaries[key];
// }
// console.log(sum);


// Multiply numeric property values by 2
// importance: 3

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// function multiplyNumeric(menu){
//     console.log(menu)
//     for(let key in menu){
//         // console.log("*******",menu[key]);
//         // console.log("kjjilkk",typeof(menu[key]))
//         if(typeof(menu[key])=== 'number') {
//             menu[key]= 2*menu[key];
//         }
//     }
// }
// multiplyNumeric(menu)
// console.log(menu);

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.


// *********************************************************************************************************

// console.log(1);

// setTimeout(() => console.log(2));

// Promise.resolve().then(() => console.log(3));

// Promise.resolve().then(() => setTimeout(() => console.log(4)));

// Promise.resolve().then(() => console.log(5));

// setTimeout(() => console.log(6));

// console.log(7);

// // Output:  1 7 3 5 2 6 4

// *********************************************************************************************************

// function makeUser() {
//   return {
//     name: "John",
//     ref: this
//   };
// }

// let user = makeUser();

// console.log(user)
// console.log( user.ref.name ); // What's the result?

// let user={
//     address:{

//     }
// }

// console.log(user.address.street);  //The non existing property problem

// let user={
//     address: '151, Yadav Nand Nagar Indore',
// }
// console.log(user?.address?.street?.ram);
// console.log(HEllo?.a);

// let userAdmin = {
//   admin() {
//     console.log("I am admin");
//   }
// };

// let userGuest = {};

// userAdmin.admin?.(); // I am admin

// userGuest.admin?.(); // nothing happens (no such method)

// *************************************************************************************************
// Conditional Rendering

// if('0') console.log("Hello...!!")

// let a = {};
// let b = {}; // two independent objects

// console.log( a == b ); // false
// console.log (a<b);
// console.log(a>b);


// const user={
//     name:"Gunjan",
// }

// user.name="Tanish";

// const newUser=user;

// newUser.name="Ram"

// console.log(user)

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//   clone[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// clone.name = "Pete"; // changed the data in it

// console.log( user.name ); 

// let user = {
//   name: "John",
//   age: 30
// };

// let clone = Object.assign({}, user);

// console.log(clone); 
// console.log(user)

// console.log(clone==user)


// ****************************************
// some output based questions 

    // function display() {
    //   var a = b = 10;
    // }
    // display();
    // // console.log(a);
    // console.log(b);
    // console.log('b', typeof b === 'undefined');
    // console.log('a', typeof a === 'undefined');

    // console.log(false == "0");
    // console.log(false === "0");

    // console.log('start');

    // Promise.resolve().then(() => console.log('promise 1'));
    // setTimeout(() => console.log('timeout 1'), 0);
    // Promise.resolve().then(() => console.log('promise 2'));

    // console.log('end');

    // start end promise1 promise2 timeout1

    // for (var i = 0; i < 3; i++) {
    //   setTimeout(() => console.log(i), 100);
    // }

    // for (let j = 0; j < 3; j++) {
    //   setTimeout(() => console.log(j), 100);
    // }

    // const person = { name: "Alice", age: null , city: "Indore"};
    // const { name, age = 30, city = "New York" } = person;

    // console.log(name, age, city);

    // let x = 0.1 + 0.2;
    // let y = 0.3;
    // console.log(x == y);
    // console.log(x);
    // console.log(y);

    // let x = false ;
    // let y = "0" ;
    // console.log(x==y)
    // console.log(x===y)

    // console.log(typeof(x));
    // console.log(typeof(y));

    // if('0') console.log("string 0 is true value");
    // else console.log("it is a falsy value ");


// let x = "5";
// let y = 2;

// console.log(x + y);
// console.log(x - y);

// let a = () => {
//   console.log(this);
// };

// a();

// let a = [1, 2, 3];
// let b = [4, 5, 6];

// console.log(a + b);

// let x= 018;
// let y= 015;

// console.log(x-y);

// Studied Ojects...Object cloning and mergining ...referncing ....conditional branching 
// Optional chaining ...event loop 