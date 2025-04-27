// Function Declaration

 function sayHello(){

 }

// Function Expression

 const sayBye = function(){

 }
// Perform a task
// function greet(firstName, lastName, emoji){
//     console.log('Hello' + ' ' + firstName +' '+ lastName + ' '+ emoji );
// }
// greet('Akintunde', 'Feolu', '🌱')

// // Calculate a Value

// function division (number) {
//     return number/2;
// }
// console.log(division(50))
// console.log(division(15000))

// If a Customer has more than 100points, 
// they are VIP Customer, 
// otherwise they are Regular Suctomer

// let points = 1000;
// let customer = points > 50 ? 'VIP Customer' : 'Regular Customer';

// console.log(customer);


// Hour
// If hour is betwenn 6am and 12pm: Good Morning!
// If it is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good evening!

// let hour = 1;

// if (hour >= 6 && hour < 12) 
//     console.log('Good Morning🌅');
// else if (hour >= 12 && hour < 14) 
//     console.log('Good Afternoon☀️')
// else if (hour >= 19 && hour < 24) 
//     console.log('Good Night!🌙')
// else 
// console.log('Good Evening🌆')

// odd numbers in 400

// for (let i = 1; i <= 50; i++)
//     if (i % 2 !== 0 )console.log('Odd No', i);
// else if (i % 2 === 0) console.log('Even No', i)

// Max of 2 Numbers

// function maxnumbers(firstNumber, secondNumber) {
//    return firstNumber > secondNumber ? 'firstNumber' : 'secondNumber'
// }
// console.log(maxnumbers (5000, 7000));

// Landscape or Potrait

// function isLandscape (width, height) {
//     return width > height ? 'Landscape' : 'Potrait'
// }
// console.log(isLandscape(1000, 2000))

// FizzBuzz

// const output = fizzBuzz(15);
// console.log(output);
// function fizzBuzz(input){
// if ((input % 3 === 0) && (input % 5 === 0))
//    return 'FizzBuzz';
// if (input % 3 === 0)
//     return 'Fizz';
// if (input % 5 === 0)
//     return 'Buzz';

// return input;
// }

// Demerit Points
// checkSpeed(185);
// function checkSpeed (speed){
//     const speedLimit = 70;
//     const KmperHr = 5;
//     const overSpeed = 12;
//     if (speed < speedLimit + KmperHr)
//     console.log ('OK')
//     else {
//        const points = Math.floor((speed - speedLimit) / KmperHr);
//        if (points >= overSpeed)
//         console.log('License Suspended')
//     else {
//         console.log(points, 'points')
//     }
//   };
// }

// showNumbers (20);

// function showNumbers(limit){

//     for (let limit = 0; limit <= 20; limit++)
//     if (limit % 2 === 0)
//     console.log(limit, 'EVEN')
//     else {
//         if (limit % 2 !== 0)
//         console.log(limit, 'ODD')
//     }
// }

// showNumbers(20);
// function showNumbers(limit){
//     for (let i = 0; i <= limit; i++){
//         const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
//     console.log(i, message)
//     }
// }

// Sum of Multiples of 3 and 5

// console.log(sum(10));

// function sum(limit){
//     let sum = 0;
//     for (let i = 0; i <= limit; i++)
// if (i % 3 === 0 || i % 5 === 0)
//     sum += i
//     return sum;
// }

// showStars(5);
// function showStars(rows) {
//     for (let i = 1; i <= rows; i++){
//         let patterns = '';
//         for (let j = 0; j < i; j++)
//             patterns = patterns + '*'

//         console.log(patterns)
//     }
// }

// const address = {
//     street: 'Agbooro',
//     city: 'Ikirun',
//     zipCode: '100010'
// }
// showAddress(address);
// function showAddress(address){
//     for (let key in address){
//         console.log(key, address[key])
//     }
    
// }

// let address = {
//     state: 'Osun',
//     City: 'Osogbo',
//     zipCode: 100010,
//     showAddress(address) {
//         for (let key in address)
//             console.log(key, address[key])
//     }
        
// }

// Factory Function

// let address = createAddress ('Osun', 'Osogbo', 100010)
// console.log(address)

// function createAddress(street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     }
// }

// Constructor Function

// let address2 = new createAddress ('Osun', 'Osogbo', 100010)
// console.log(address2)

// function createAddress(street, city, zipCode){
//         this.street = street
//         this.city = city
//         this.zipCode = zipCode
// }

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     views: 10,
//     comments: [
//         {author: 'a', body: 'b'},
//         {author: 'a', body: 'b'},
//     ],
//     isLive: true
// };


// Max of 2 numbers in an array
const numbers = arrayFromRange(1, 10)
function arrayFromRange (min, max){
    const output = [];
    for (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

console.log(numbers)