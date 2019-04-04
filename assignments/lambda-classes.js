//LAMBDA SCHOOL DATABASE PROJECT 

// Classes for all people at Lambda School 

// Person, because no matter their role everyone involved at Lambda is a person 
class Person {
    constructor(attributes){
        this.name = attributes.name; 
        this.age = attributes.age;
        this.location = attributes.location; 
        this.gender = attributes.gender;
    }
    // Methods 
    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`; 
    }
} // Person 

// Tests 
// Testing Person class
// const kimee = new Person ({
//     name: "Kimee", 
//     age: 28, 
//     location: "San Francisco", 
//     gender: 'F'
// });

// console.log(kimee); 
// console.log(kimee.speak()); 