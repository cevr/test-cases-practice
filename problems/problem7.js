var assert = require('assert');

// we need 7 test cases. 
let inputs = [
    ["fo", 3],
    ["foo", 3],
    ["bar", -3],
    ["eh", 0],
    ["see", "0"],
    ["ww", 3],
    ["fo", 3]
]

let outputs = [
    "fofofo",
    "foofoofoo",
    undefined,
    undefined,
    undefined,
    "wwwwww",
    "fofofo"
]

/*
Make this function return the input string repeated as many times as specified. 
If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

For example:

f("foo", 3) // "foofoofoo"
f("fo", 3) // "fofofo"
f("foo", -1) // undefined
*/
function f(arr) {
    return typeof arr[0] === 'string' && typeof arr[1] === 'number' && arr[1] > 0 ? arr[0].repeat(arr[1]) : undefined;
}

function runTest(i) {
    if (i > inputs.length) throw new Error("You do not have enough test cases");
    var expected = outputs[i];
    var actual = f(inputs[i]);
    assert.deepEqual(actual, expected);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);
runTest(5);
runTest(6);