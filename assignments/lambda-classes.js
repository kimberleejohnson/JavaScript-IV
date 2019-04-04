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

// Instructor, extension of Person 
class Instructor extends Person {
    constructor(instructorAttributes) {
        super(instructorAttributes); 
        this.specialty = instructorAttributes.specialty; 
        this.favLanguage = instructorAttributes.favLanguage; 
        this.catchPhrase = instructorAttributes.catchPhrase; 
    }
    // Methods 
    // Demo
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    // PLACEHOLDER FOR grade(student, subject)
} // Instructor 

// LAMBDA DATABASE 

// Instructors 

const instructor1 = new Instructor ({
    name: "Josh", 
    age: 32,
    location: "Utah", 
    gender: "M", 
    specialty: "front-end", 
    favLanguage: "JavaScript",
    catchPhrase: "Banjo time!"
}); 


// Logging some database information to the console 
console.log(instructor1); 
console.log(instructor1.demo("JavaScript")); 
console.log(instructor1.speak()); 


// Deprecated tests 
// Testing Person class
// const kimee = new Person ({
//     name: "Kimee", 
//     age: 28, 
//     location: "San Francisco", 
//     gender: 'F'
// });

// console.log(kimee); 
// console.log(kimee.speak()); 