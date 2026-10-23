let num1 = [1,2,3,4,5]
let num2 = [1,2,3,4,5]
let num3 = [1,2,3,4,5]
num3.push(num2)
num1.concat(num2)
console.log(num1);
console.log(num3);


// There is one more method named as spread which goes like 

let num4 = [...num1, ...num2]
console.log(num4);



console.log (Array.isArray( "Hitesh " ) )
console.log (Array.from( "Hitesh" ) )
console.log(Array.from({name:"hitesh"})) // interesting