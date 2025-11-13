// let student = {
//     name: "Ravin",
//     age: 22,
//     course: "Full Stack Development"
// }
//Accessing a Property
//Dot Notation
// console.log(student.name)

//Bracket Notation
// console.log(student["course"])

//Add new property
// student.country = "Nepal"


//Update Existing Property
// student.age = 16;


//Delete a Property
// delete student.age;
// console.log(student)
//Nested Objects
// let student = {
//     name: "Ravin",
//     age: 22,
//     address: {
//         city: "Ravin's city",
//         zip: 134357
//     },
//     course: "Full Stack Development"
// }

// console.log(student.address.city)


// let student = {
//     name: "Ravin",
//     age: 22,
//     course: "Full Stack Development"
// }
// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))
// Object.freeze(student)
// student.age = 16; //ignored
// student.city = "Ravin's city" //ignored
// delete student.age; //ignored
// console.log(student)
// Object.seal(student)
// student.age = 16; //Allowed
// student.city = "Ravin's city" //ignored
// delete student.age; //ignored
// console.log(student)

//for...in loop

// let student = {
//     name: "Ravin",
//     age: 22,
//     course: "Full Stack Development",
//     Country: "Nepal"
// }

// for(let prps in student){
//     console.log(prps, ":",student[prps] )
// }



