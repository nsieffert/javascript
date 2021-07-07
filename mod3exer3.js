//Complete the following problems: 

/************************************************************* */

// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 
 

//your code...

function emptyString(val) {
        if (val === ' ') {
            console.log('true');
        } else {
            console.log('false');
        }
    }
    emptyString(' ');



/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). 
Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 

//your code...

const firstStr = 'Learning Javascript has been a growing experience.';
    var newStr = firstStr.replace('growing', 'liberating');

    console.log(firstStr);
    console.log(newStr);


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number 
//from the first array. Use an arrow function and one of the built-in array methods. 



//your code...

//using an arrow function per the instructions...

let origArray = [1, 2, 3, 4, 5];
    let squareArray = [];

    let trySquares = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            squareArray.push(arr[i] * arr[i]);
        }
    }
    trySquares(origArray);
    console.log(squareArray);







/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. 
//Write a JavaScript program that returns an array of the numbers that are greater than 3. 
//Use an arrow function and one of the built-in array methods.



//your code...


let firstArray = [1, 3, 5, 7, 9, 1, 3, 5];
    let greaterArray = [];

    let greater = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 3) {
                greaterArray.push(arr[i]);
            }
        }
    }
    greater(firstArray);
    console.log(greaterArray);



/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. 
//Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

 let startArray = [2, 4, 6, 8, 1, 3, 5];
    let final = 0;

    let doingSums = (arr) => {
        for (let i = 0; i < arr.length; i++) {
            final = i + i;
            console.log(final);
        }
    }

    doingSums(startArray);




/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. 
//For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...

function fSplit(a) {
        let cSplit = a.split([])
        return cSplit;
    }

    console.log(fSplit('GCTA'));

    let cSplit = ['G', 'C', 'T', 'A'];
    let newArray = []

    function swapArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            newArray[i] = newVal(arr[i]);
        }
        return newArray;
    }
    let newVal = function (n) {
        switch (n) {
            case 'G': return 'C';
                break;
            case 'C': return 'G';
                break;
            case 'T': return 'A';
                break;
            case 'A': return 'T';
                break;
        }
    }
    swapArray(cSplit);
    console.log(newArray);




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  
//Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    //your code...
}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    //your code...


let numbers = [2, 23, 1, 2, 1, 1, 1, 2, 2.5, 20, 200, 2000, , { k: 1 }, 20000, 19999, 1878, 140, 23, 4, "sk", true, true, "true-dat", "nice", "one", "two", "three", "3", "tea", []];

function maxNumber(numbers) {
    let tryFilters = numbers.filter(function (item) {
        return (parseInt(item) == item);
    })

    for (let i = 0; i < tryFilters.length; i++) {
        if (tryFilters[i] === '3') {
            tryFilters[i] = 3;

            tryFilters.push(1);
            tryFilters.push(2);
            tryFilters.push(3);

        }
    }
    console.log(tryFilters);
    return Math.max(tryFilters);
}

console.log(maxNumber(numbers));




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  
//The key is the example data type, and the value is the name of the data type.  
//An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"},"object");

const mapObj = new Map();
    mapObj.set({company', "TEKSystems"});
    mapObj.set(name', 'Norita');
    mapObj.set(age', 45);
    mapObj.set(isMarried', true);
    mapObj.set('children', ['Geneva', 'Megan']);
    mapObj.set('greeting', function greeting() { console.log('Good Morning') });
    mapObj.set('trainer', "object");

    console.log(mapObj.has({company', "TEKSystems"})); // false
	

console.log(mapObj.has({company : "TEKsystems"}));  
//The above console.log() statmeent returns false.  Write another console.log() statement explaining why this line of code prints false.  
Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

//your code...

const mapObj = new Map();
    mapObj.set('company', "TEKSystems");
    mapObj.set('name', 'Norita');
    mapObj.set('age', 45);
    mapObj.set('isMarried', true);
    mapObj.set('children', ['Geneva', 'Megan']);
    mapObj.set('greeting', function greeting() { console.log('Good Morning') });
    mapObj.set('trainer', "object");

    console.log(mapObj.has('company'));
	console.log('the 'has' function only searches on the key, not the value. It will produce true when only 'company' is searched on. it also does not take the curly braces with a key: value, key: value. It just takes key, value *that is what the video says and that is what actually works');


//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']

const mapObj = new Map();
    mapObj.set('company', "TEKSystems");
    mapObj.set('name', 'Norita');
    mapObj.set('age', 45);
    mapObj.set('isMarried', true);
    mapObj.set('children', ['Megan']);
    mapObj.set('greeting', function greeting() { console.log('Good Morning') });
    mapObj.set('trainer', "object");


    const final = [];
    mapObj.forEach((key, value) => final.push(key));
    console.log(final);


/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.


 let ones = [1, 11, 111, 1111, 11111, 111111, 1111111, 11111111, 111111111, 1111111111];

    ones.reverse(ones);
    console.log(ones);
	
/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  
//It should return the output of the callback function.

function performer(cb) {
    //code goes here
}

function performer(message, callback) {
        console.log("Good morning. " + message);

        if (typeof callback == "function")
            callback();
    }

    function callbackFunct() {
        console.log(
            "This is my callback message");
    }

    performer("I actually got this to work", callbackFunct);

/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.

30.8.1 Default parameter values 
You can set a default parameter value using the equal sign. This is handy because if a value is not specified, it will default to zero rather than throwing an error or exception.


function testFunction(a, b = 0) {
        return [a, b];
    }
    console.log(testFunction(5)); // returns 5 and 0
