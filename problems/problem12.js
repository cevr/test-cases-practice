var assert = require('assert');

// we need 5 test cases. 
let inputs = [
    [
        [0, 1, 2, 3],
        [1, 3, 4, 5]
    ]
]

let outputs = [
    [0, 2, 4, 5]
]

/*
Make this function return the elements that are unique to array1 and array2.
If there are no unique elements return an empty array.
If the inputs are anything other than arrays, return undefined. 
For example:

uniqueElements([0,1,2,3], [1,3,4,5]); // [0,4,5]
uniqueElements([1,2,3], [1,2,3]); // []
u                                                             niqueElements(2,3); // undefined, not arrays
*/
var f = function (arr1, arr2) {
    return !Array.isArray(arr1) || !Array.isArray(arr2) ? undefined : arr1.concat(arr2).filter(e => arr1.includes(e) && !arr2.includes(e) || !arr1.includes(e) && arr2.includes(e));
}

function runTest(i) {
    // if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(...inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);