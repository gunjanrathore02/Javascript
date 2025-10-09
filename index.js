// const obj={
//     name: "Gunjan",
//     age: 20
// }

// obj.fun=function(){
//     console.log("Hello");
// }

// console.log(obj)


// function apiCall(){
//     const res= fetch(" https://api.thecatapi.com/v1/images/search?limit=10")
//     res.then(data=>data.json()).then(data=> console.log(data));
// }

// apiCall();


// let name = "W3Schools";
// let [a1, a2, a3, a4, a5, a6 , a7] = name;

// console.log(`${a1}  ${a2}  ${a3}  ${a4}  ${a5} ${a6} ${a7}`);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50
// };

// // Destructuring
// let {firstName, lastName:name , country = "US"} = person;

// console.log(firstName, name, country);

// Create an Array
// const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];

// // Destructuring
// let [fruit1,,,fruit2] = fruits;

// console.log(fruit1, fruit2);
// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eye;
// }

// function Person(first, last, age, eye) {
//   firstName = first;
//   lastName = last;
//   age = age;
//   eyeColor = eye;
// }


// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// const mySister = new Person("Anna", "Rally", 18, "green");

// const mySelf = new Person("Johnny", "Rally", 22, "green");

// console.log(myFather);
// console.log(myMother);
// console.log(mySister);
// console.log(mySelf);

// console.log(firstName);
// console.log(lastName);

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function fun() {
    return this.firstName + " " + this.lastName;
  };
}

const myMother= new Person("Gunjan", "Rathore", 20, "black");
// console.log(myMother);

myMother.changeName = function (name) {
  this.lastName = name;
  return this.lastName;
}

console.log(myMother.fullName());
console.log(myMother.changeName("sahu"));