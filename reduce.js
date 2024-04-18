function extractValue(arr, key) {
    // Use the map method to create a new array with the value of the specified key from each object
    return arr.map(function(obj) {
        return obj[key];
    });
}

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
console.log(extractValue(arr, 'name')); // ['Elie', 'Tim', 'Matt', 'Colt']

function vowelCount(str) {
    // Initialize an empty object to store the vowel counts
    const counts = {};
    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Convert the string to lowercase to make the function case insensitive
    str = str.toLowerCase();

    // Iterate through each character of the string
    for (let char of str) {
        // Check if the character is a vowel
        if (vowels.includes(char)) {
            // Increment the count of the vowel in the counts object
            counts[char] = (counts[char] || 0) + 1;
        }
    }

    // Return the object with vowel counts
    return counts;
}
console.log(vowelCount('Elie')); // {e: 2, i: 1}
console.log(vowelCount('Tim')); // {i: 1}
console.log(vowelCount('Matt')); // {a: 1}
console.log(vowelCount('hmmm')); // {}
console.log(vowelCount('I Am awesome and so are you')); // {i: 1, a: 4, e: 3, o: 3, u: 1}

function addKeyAndValue(arr, key, value) {
    // Iterate through each object in the array
    for (let obj of arr) {
        // Add the key-value pair to each object
        obj[key] = value;
    }
    // Return the modified array of objects
    return arr;
}
// Example usage with the array directly passed to the function
console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'Instructor'));

function partition(arr, callback) {
    // Initialize two subarrays
    const trueArray = [];
    const falseArray = [];

    // Iterate through each value in the array
    for (let val of arr) {
        // Apply the callback function to the current value
        if (callback(val)) {
            // If the result is true, push the value to the trueArray
            trueArray.push(val);
        } else {
            // If the result is false, push the value to the falseArray
            falseArray.push(val);
        }
    }

    // Return an array containing the two subarrays
    return [trueArray, falseArray];
}

// Example usage with isEven callback function
function isEven(val) {
    return val % 2 === 0;
}

console.log(partition([1, 2, 3, 4, 5, 6, 7, 8], isEven)); // [[2, 4, 6, 8], [1, 3, 5, 7]]

// Example usage with isLongerThanThreeCharacters callback function
function isLongerThanThreeCharacters(val) {
    return val.length > 3;
}

console.log(partition(['Elie', 'Colt', 'Tim', 'Matt'], isLongerThanThreeCharacters)); // [['Elie', 'Colt', 'Matt'], ['Tim']]
