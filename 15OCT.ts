// let num=5;
// num=18
// console.log(num)

// let x: any = "Hello";
// console.log(typeof x);

// x = 10;
// console.log(typeof x);

// let city: string='25'
// console.log(city);

// let userName: string = "Arjun";  
// let age: number = 25;            
// let isActive: boolean = true;    

// function greetUser(name: string, age: number){
//   return `Hello, ${name}! You are ${age} years old.`;
// }

// let greeting = greetUser(userName, age);
// console.log(greeting);

// let nam : any;
// nam=9;
// nam="iefhsf";
// console.log(nam);

// enum Value {
//     first=7,
//     second=83,
//     third,
//     fourth
// }

// let res = Value.third;
// console.log(res)

// enum Direction {
//     Up ='fyhgj',
//     Down=0,
//     Left=8,
//     Right
// }

// let move: Direction = Direction.Right;
// console.log(move);

// type values = "first" | "second" | 53 | 87;

// let val: values= 87

// console.log(val)

// type Person = {name: string } & { age: number}

// let obj: Person={
//     name:"Gunjan",
//     // age: 20
// }

// console.log(obj)

// interface Person {
//     name: string;
//     age: number;
//     address?: string; // Optional property
// }

// function greet(person: Person): string {
//     return `Hello, ${person.name}!`;
// }

// const user: Person = {
//     name: "Alice",
//     age: 30
// };

// console.log(greet(user));

// interface digit {
//     num1: number,
//     num2: number,
// }

// function add( digits: digit): number{
//     return digits.num1+ digits.num2;
// }

// const obj: digit ={
//     num1: 39,
//     num2: 20,
// }
// console.log(add(obj))

// function identity<T> (arg: T): T{
//     return arg;
// }
// function identity (arg: any): any{
//     return arg;
// }
// let res:string =identity("Gunjan");
// res.toUpperCase;
// console.log(res);

// let res2= identity(834);
// res2.toUpperCase;
// console.log(res2)

// function createArray< T1, T2> ( a1: T1, a2: T2) : [T1, T2]{
//     return [a1, a2];
// }

// let arr= createArray("Gunjan", 20);
// console.log(arr)


// console.log(this.name)

// type user={
//     name: string,
//     address: string,
//     phone: number
// }

// let obj:user={
//     name: "Gunjan",
//     address: "jfdskf",
//     phone: 98
// }


// console.log(obj)
