// function info(){
//     console.log(`Hiii... I am ${this.name} proficient in skills including ${this.skill1} , ${this.skill2} , ${this.skill3}`)
// }

// const obj1={
//     name: "Gunjan",
//     skill1: "Js",
//     skill2: "React",
//     skill3: "Node.js"
// }

// const obj2={
//     name: "Tanishq",
//     skill1: "Python",
//     skill2: "AI",
//     skill3: "ML"
// }

// info.call(obj1);

// info.call(obj2);

// const obj3={
//     name: "Devika",
// }



const person={
    firstName: "Gunjan",
    lastName: "Rathore",
    age: 20,
    city: "Indore",
    greet: function(){
        console.log(`You're welcome ${this.firstName}`);
    }
}

function name(){
    console.log(`Thanks for visiting ${this.firstName} ${this.lastName}`);
}
person.greet();
name.call(person);