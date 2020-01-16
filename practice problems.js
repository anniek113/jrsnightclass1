//1) Write a function that returns the result of 5+6+7+8+9+10.

function display() {
    return 5 + 6 + 7 + 8 + 9 + 10;
}
console.log(display());

//2) Write a function that returns the perimeter of a rectangle with a width of 5 and a height of 8.

function perimeter5And8() {
    return 5 + 5 + 8 + 8;
}
console.log(perimeter5And8());

//3) Write a new function that returns the perimeter of a rectangle with the width and height being specified as arguments to the function.

function perimeter(width, height) {
    return 2 * (width + height);
}
console.log(perimeter(5, 8));

//4) Write a function that converts fahrenheit, given as an argument, to celcius.

function fahrenheitToC(f) {
    return (f - 32) * (5 / 9);
}
console.log(fahrenheitToC(32));

//5) Write a function that converts celcius, given as an argumen, to fahrenheit.

function celsiusToF(c) {
    return c * (5 / 9) + 32;
}
console.log(celsiusToF(32));

//6) Write a function that calculates tip with 2 arguments, the bill and the tip percentage. Use the build-in JS toFixed() method to round the answer to two decimal places.

function calcTip(bill, percent) {
    return (bill * percent) / 100;
}
console.log(calcTip(35, 20));

//7) Write a function that takes a number an an argument and returns the sum of each individual digit. So an input of 998 would return 26 (because 9 + 9 + 8) is 26.

function sumOfDigits(num) {
    var sum = 0;
    if (Number.isInteger(num) === false) {
        return sum;
    }
    var str = num.toString();
    for (i = 0; i <= str.length - 1; i++) {
        sum += +str[i];
    }
    return sum;
}
console.log(sumOfDigits(123));

//8) Write the same function above, but that takes an input from the built-in browser function, prompt().

function sumOfDigitsPromt(num) {
    var numner = prompt("Please enter your number");
    var sum = 0;

    if (Number.isInteger(num) === false) {
        return sum;
    }

    var str = num.toString();
    for (i = 0; i <= str.length - 1; i++) {
        sum += +str[i];
    }

    return sum;
}
console.log(sumOfDigitsPromt(123));

//9) Write a function that takes an argument in seconds and specifies the equivalent number of years.

function secToYear(seconds) {
    return seconds / 31536000;
}

//10) Write a function that returns the current date and time.

function dateAndTime() {
    return new Date().toLocaleString();
}
console.log(dateAndTime());

//11) Write a function that returns the date 33 days from now.

const currentDate = new Date();
const diffDate = new Date();

function daysToMill(days) {
    return 24 * 60 * 60 * 1000 * days;
}

currentDate.getTime() + daysToMill;
const futureDate = new Date(currentDate.getTime() + daysToMill(33));

//12) Write a function that returns the mean of an array of numbers.

const arrMean = [88, 132, 68, 97, 69];

function getAvg(arrMean) {
    const total = arrMean.reduce((acc, c) => acc + c, 0);
    return total / arrMean.length;
}
const average = getAvg(arrMean);

console.log(average);

//13) Write a function that randomly generates a number between 1 and 12, and returns the name of the corresponding month. (Hint: Look up how to get a random number in JavaScript.)

function randomMonth() {
    const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];
    return months[Math.floor(Math.random(1) * 12)];
}

console.log(randomMonth());

//14) Write a function that takes three numbers as arguments, and returns the same 3 numbers in increasing order (more specifically, non-decreasing order if multiple numbers are the same).

function sort() {
    let numbers = [4, 2, 3];
    return numbers.sort((a, b) => a - b);
}
console.log(sort());

// 15) Write a function that returns the appropriate boolean value if a given string argument is a palindrome, where the string is the same when reversed. Examples of palindromes are "racecar" and "3003".
//Ex: isPalindrome("racecar") returns true. isPalindrome("racecars") returns false.

function isPalindrom(str) {
    return str == str.split('').reverse().join('');
}
console.log(isPalindrom("kayak"));

// 16) Write a function that returns true when two inputs are equivalent when using coercion, but not equivalent without coercion.

const isCoerced = (x, y) => {
    if (x === y) {
        return false;
    } else if (x == y) {
        return true;
    } return false;
}
console.log(isCoerced(5, "5"));


//17) Write a function called isEven() that returns true if a given argument is even.

function isEven(x) {
    if (x < 0) {
        return false;
    } else if (x % 2 == 0) {
        return true;
    } else {
        return isEven(x - 2);
    }
}
console.log(isEven(2));

//18) Write a function called isOdd() that returns true if a given argument is odd. Do this by only using the isEven() function you wrote previously.

function isOdd(x) {
    if this.isEven(x) = false; {
        return true;
    }
else {
        return false;
    }

}
console.log(isOdd(5));

//19) Write a function that returns true if a given argument is a multiple of 3. Examples of multiples of 3 are 0,3,6,9 ...

function multipleOfThree(x) {
    if (x % 3 == 0 || x % 7 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(multipleOfThree(33));

//20) Write a function that takes two arguments. Check if the first argument is the multiple of the second argument. Return the appropriate boolean.
//Ex. checkMultiple(20,5) returns true. checkMultiple(21,5) returns false.

function multiple(x, y) {
    var remainder = x % y;
    if (remainder == 0) {
        return true
    } else {
        return false
    }
}
console.log(multiple(20, 5));
console.log(multiple(21, 5));

//21) Write a function that takes an array of numbers as an argument and returns the smallest number in the array.

function arrMin() {
    const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4];
    return Math.min(...arr);
}
console.log(arrMin());

//22) Write a function that returns the largest integer n where n*n is still less than 12,000. (Hint 1, use a while loop). (Hint 2, you don't need an argument).

//23) Write a function that returns the largest integer n where n*n is still less than a given argument.
//Ex. smallestN(5) would return 2, because 2*2 is 4, which is smaller than 5, but 3*3 is 9, which is larger than 5. 


//24) Write a function that takes a string as an argument and returns the reverse of that string.

function reverseString(str) {
    return str
        .split("")
        .reverse()
        .join("");
}
console.log(reverseString("hello world"));

//25) Write a function that counts the occurences of a specific element in an array, specified as a function argument.
//For example, for the array [5,7,12,5,3,3,5], the function countOccurences(3) would return a value of 2.

var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};
for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts[5], counts[2], counts[9], counts[4]);

//26) Write a function that returns a multidimensional array that contains number of occurences for every element of an array.
//For example, for the array [5,7,12,5,3,3,5], the function countAllOccurences(array) would return: [[5,3],[7,1],[12,1],[3,2]]
const countAllOccurences = arr => {
    let obj = {}, arrFinal = [];
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
        arrFinal = Object.keys(obj).map(key => [Number(key), obj[key]]);
    }
    return arrFinal;
}
console.log(`26)`, countAllOccurences([5, 7, 12, 5, 3, 3, 5]));


//27) Write a function that takes an array of numbers as an input, and checks to see if the array is sorted in non-decreasing order. 
//(i.e. each element in the array is less than or equal to the next element.)

var arr1 = [1, 2, 3, 4, 4];
var arr2 = [3, 2, 1];

function sortArr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
            if (arr[i] > arr[i + 1]) {
                return false;
            }
        }

    }
    return true;
}
console.log(sortArr(arr1));
console.log(sortArr(arr2));

//28) Write a function that takes an array of numbers as an argument and sorts them in increasing order. do it without the .sort keyword

function sortTwo() {
    let numbers = [4, 2, 3, 99, 27, 14, 8, 1, 234, 17, 9, 64];
    return numbers.sort((a, b) => a - b);
}
console.log(sortTwo());

// 29) Write a function that takes two sorted arrays of numbers as arguments, and returns one new sorted array containing the numbers from both of the arrays given as arguments. Call this function merge(). */
const merge = (arr1, arr2) => mergedArrs(arr1, arr2);
console.log(merge([2, 4, 6], [3, 5]));

/* 30) Leibniz's formula can compute pi. the formula is given below:
pi = 4 * (1 - (1 / 3) + (1 / 5) - (1 / 7) + (1 / 9) - (1 / 11) + ...).
The elipsis(the three dots) means this pattern continues forever.
Notice that the operators(+ and - ) alternate each time.
Write a function called calculatePi(), that takes an argument that specifies the number of terms to calculate from (don't include the 4 in the count) with this formula and returns the value. For example if you said:
Ex.calculatePi(5) would return the result of the first 5 terms in the parentheses, meaning 1 through (1 / 9) in this case.
*/
const calculatePi = number => {
    let sum = 1, denom = 1, arr = [], subtotal = 0;
    for (let i = 0; i < number; i++) {
        denom += 2;
        if (i % 2 === 0) {
            value = -(1 / denom);
        } else {
            value = (1 / denom);
        }
        arr.push(value);
    }
    for (let num in arr) {
        subtotal += arr[num];
    }
    sum = sum + subtotal;
    return 4 * sum;
}
console.log(calculatePi(1));
