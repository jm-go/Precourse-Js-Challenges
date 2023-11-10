// Challenge 1:
// Write a function that takes a number and returns true if it is a positive number 
// and false if it is a negative number.
const isNumberPositive = (number) => {
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isNumberPositive(-1)); // returns false
console.log(isNumberPositive(10)); // returns true

// Challenge 2:
// Write a function that takes a number of days and converts it into an age.
const convertDaysToAge = (days) => {
    const age = days/365;
    console.log(age);
}

convertDaysToAge(3650); // returns 10
convertDaysToAge(6570); // returns 18

// Challenge 3:
// Write a function that takes three numbers and returns the largest 
// of the three numbers.
const getLargestNumber = (num1, num2, num3) => {
    return Math.max(num1, num2, num3);
}

console.log(getLargestNumber(2 ,1, 4)); // returns 4
console.log(getLargestNumber(6,2,3)); // returns 6

// Challenge 4:
// Write a function that takes an array of names and returns the last name
// from the array of names.
const getLastName = (names) => {
     return names[names.length - 1];
}

console.log(getLastName(["Charlie", "Rob", "Andy"])); // returns “Andy”
console.log(getLastName(["Ash","Stu"])); // returns "Stu"


// Challenge 5:
// Write a function that takes an array of numbers and returns true if all of the numbers are positive.
// It should return false if there are one or more negative numbers in the array.
const allNumbersPositive = (numbers) => {
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] >= 0) {
            return true;
        } else {
            return false;
        }
    }
}

console.log(allNumbersPositive([2,4,5])); // returns true
console.log(allNumbersPositive([-5,4,6])); // returns false