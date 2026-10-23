// // Creating object
// // while storing it will now show anything but it stores as "name":"eklavya"
// const eklavya = {
//     name:"eklavya",
//     age:21,
//     location:"bhopal",
//     mail:"eklavya@google.com",
//     "friend":"arvind"
// }

// console.log(eklavya.name);
// console.log(eklavya["age"]); //accesing like string
// console.log(eklavya["friend"]); //friend cant be accessed using . method


// // Symbol

// const mysum = Symbol("key1")

// const arvind = {
//     [mysum] : "25"
// }

// console.log(arvind[mysum]);


// // changing value
// eklavya.age = 25

// console.log(eklavya.age);


// // want to freeze value just use 

// Object.freeze(eklavya)
// eklavya.age = 28
// console.log(eklavya.age);

// console.log(eklavya);
