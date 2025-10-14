
// let obj={
//     name: "Gunjan Rathore",
//     age: 20,
//     greet: function()
//     {
//         console.log(name ,age);
//     }
// }

// console.log(obj._proto_);


// function Person(name){
//     this.name=name;
//     console.log(name);
// }
// const obj= new Person("Gunjan");

// console.log(obj.__proto__ === Person.prototype)
// console.log(obj.__proto__);
// console.log(Person.prototype)

// let obj = {};
// console.log( obj );


// class student{
    
//     constructor(name,age){
//         name=name;
//         age=age;
//     }
//     info () {
//         console.log(name, age);
//     }
// }

// const obj= new student("Gunjan",20);
// obj.info();


// const newPromise = new Promise((res,rej)=>{
//     let word= "hello";
//     if(word.length<8) res("word length is less than 8");
//     else rej("word length is greater than 8");
// })

// newPromise.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("Promise is executed..");
// })

// const p1=Promise.resolve(34);
// const p2 = new Promise((resolve,reject)=>{
//     let num=5;
//     if(num%5==0) resolve("Divisible by 5");
//     else reject("Not divisible by 5");
// })
// const p3= new Promise(( resolve, reject )=>{
//     reject("Rejected");
//     // resolve('resolved')
// })
// const p4=Promise.resolve(50);
// // Promise.all([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err))
// Promise.allSettled([p1,p2,p3,p4]).then((res)=>console.log(res)).catch((err)=>console.log(err))
  
// Promise.race([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 1 finished"), 1000)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 2 finished"), 500)),
// ]).then((result) =>
//     console.log(result));

// const p1= new Promise ((res,rej)=>{
//     setTimeout(()=>{
//     console.log("reject");
// },1000)})

// Promise.any([
//     Promise.reject("Task 1 failed"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

// const fs = require('fs');

// try {
//     const data = fs.readFileSync('example.txt', 'utf8');
//     console.log('File content (synchronous):', data);
// } catch (err) {
//     console.error('Error reading file synchronously:', err);
// }
// console.log('Synchronous read finished.');

const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file asynchronously:', err);
        return;
    }
    console.log('File content (asynchronous):', data);
});
console.log('Asynchronous read initiated.');