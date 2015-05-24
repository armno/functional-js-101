# functional-js-101

Learning functional javascript with [functional-javascript-workshop](https://github.com/timoxley/functional-javascript-workshop)

## random notes taken

- higher-order functions are functions that take another function as an argument OR functions that return another function.
- i think i understand "Functions are first-class objects" a bit more: Functions can be treated like Strings or Numbers: they can store values. they can be passed to another function. they can have properties like regular objects.
- `Array.prototype.some` and `Array.protoype.every` have a pretty clear concept of what they do for me. But to use them together took me a while to see what was happening.
- `Array.protype.reduce` calls the callback funtion on each element in the array, and hold it in `previousValue` (the first argument of the callback).