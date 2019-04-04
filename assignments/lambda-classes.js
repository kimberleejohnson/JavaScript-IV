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
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}.`
    }
} // Instructor 

// ProjectManager, extension of Instructor 
class ProjectManager extends Instructor {
    constructor(PMAttributes) {
        super(PMAttributes); 
        this.gradClassName = PMAttributes.gradClassName;
        this.favInstructor = PMAttributes.favInstructor; 
    }
    // Methods 
    standup(channel){
        return `${this.name} announces to ${channel} @channel standy times!`
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}.`
    }
} // ProjectManager 

// Student, extension of Person 
class Student extends Person {
    constructor(studentAttributes) {
        super(studentAttributes); 
        this.previousBackground = studentAttributes.previousBackground; 
        this.className = studentAttributes.className; 
        this.favSubjects= studentAttributes.favSubjects; 
    }
    // Methods 
    listsubjects(){
        return `${this.favSubjects}`;
    }

    PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}.`;
    } 

    sprintChallenge(subject){
        return `${this.name} has begun a Sprint Challenge for ${subject}.`;
        } 
} // Student


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

const instructor2 = new Instructor ({
    name: "David", 
    age: 21,
    location: "Utah", 
    gender: "M", 
    specialty: "front-end", 
    favLanguage: "Python",
    catchPhrase: "I ain't got no banjo!"
}); 

// Students 
const student1 = new Student ({
    name: "Kimberlee", 
    age: 28,
    location: "California", 
    gender: "F", 
    previousBackground: "Public Relations",
    className: "Web19", 
    favSubjects: ["HTML", "CSS", "JavaScript"] 
}); 

const student2 = new Student ({
    name: "Cori", 
    age: 32,
    location: "Virginia", 
    gender: "F", 
    previousBackground: "Bartending",
    className: "Web19", 
    favSubjects: ["HTML", "CSS", "JavaScript"] 
}); 

// ProjectManagers 
const projectManager1 = new ProjectManager ({
    name: "Sam", 
    age: 30,
    location: "Central Time", 
    gender: "M", 
    specialty: "back-end", 
    favLanguage: "Python",
    catchPhrase: "I love my dogs!",
    gradClassName: "Web16",
    favInstructor: "Josh"
}); 

// Logging some database information to the console 
console.log(instructor1); 
console.log(instructor1.demo("JavaScript")); 
console.log(instructor1.speak()); 
console.log(student1); 
console.log(student1.speak()); 
console.log(student1.listsubjects()); 
console.log(student1.sprintChallenge("JavaScript")); 
console.log(student1.PRAssignment("JavaScript")); 
console.log(instructor1.grade(student1, "JavaScript")); 
console.log(projectManager1.speak()); 
console.log(projectManager1.standup("Sam-PM-group")); 
console.log(projectManager1.debugsCode(student1, "JavaScript")); 


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