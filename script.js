// Q1 - Given an array of numbers, use the map function with an
//  arrow function to square each element of the array.

// const numbers = [1, 2, 3, 4, 5];
// const square = numbers.map((num, index) => num * num);
// console.log(square);

// Q2 - Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

// const getGrade = (score)=> {
//     return score >= 90 ? 'A'
//          : score >= 80 ? 'B'
//          : score >= 70 ? 'C'
//          : score >= 60 ? 'D'
//          : 'F';
// }
// console.log(getGrade(85));

// Q3 - Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.

// const car = {
//     companyName: 'Toyota',
//     model: 'Camry',
//     year: 2020
// };
// const changeYear=(newYear)=> {
//     car.year = newYear;
// }
// changeYear(2024);
// const { model, year } = car;
// console.log(`Model: ${model}, Year: ${year}`); 


// Q4 - Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

// function isPrime(num) {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     for (let i = 2; i <= num / 2; i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 83, 89, 97];
// const primes = numbers.filter(isPrime);
// console.log(primes);


// Q5 -  State different use cases of map, filter and reduce functions.

// map=> 1. to iterate between array or object
//         2. to do operation on each element in an array.

// filter=> 1. to find element or list of element from Array

// reduce=> 2. to some opeartion on array elements to get one element out from that operation. i.e. addidtion, multiplication of element to get one value out of array.


// Q6 - Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result.

// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }
// fetchData();



// Q7 - Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.

const person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        zip: '10001'
    },
    contact: {
        email: 'john.doe@example.com'
    }
};
const phoneNumber = person.contact?.phone ?? 'Phone number not available';
console.log(phoneNumber);
