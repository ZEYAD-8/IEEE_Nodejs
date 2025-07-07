
Explain the difference between primitive types and reference types in JavaScript. 
- **Primitive Types** in JavaScript are basic data types that store actual values directly. They are immutable and compared by value.  
  **Examples**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

- **Reference Types** store references (or memory addresses) to the actual data, not the data itself. They are mutable and compared by reference.  
  **Examples**: `object`, `array`, `function`.



Compare the two methods of creating a new function in JavaScript: Function Declaration and Function Expression. Discuss the differences between them in terms of hoisting and provide examples for each.
- **Function Declaration**:
  - Syntax: Uses the `function` keyword followed by a name.
  - **Hoisted**: Can be invoked before its definition in the code.
  - Example:
    sayHello();

    function sayHello() {
      console.log("Hello from a function declaration!");
    }

- **Function Expression**:
  - Syntax: A function (named or anonymous) assigned to a variable.
  - **Not hoisted**: Cannot be used before the line it's defined.
  - Example:
    sayHi();

    const sayHi = function() {
      console.log("Hi from a function expression!");
    };


- **Differences**:
  - Function Declarations are hoisted; Function Expressions are not.
  - Function Declarations are declared using the `function` keyword directly.
  - Function Expressions are stored in variables, allowing them to be anonymous or named.





Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?
- A **Pure Function** is a function that meets the following conditions:

  1. **Deterministic Output**: For the same input values, it always returns the same output.
  2. **No Side Effects**: It does not modify external states.

- **Example of a Pure Function**:
  function add(a, b) {
    return a + b;
  }

- **To classify a function as pure, ensure**:

  1. It depends only on its input parameters.
  2. It doesn’t rely on or alter any external state or data.






Write down the array methods that you have studied and classify them to destructive and not destructive.
- **Destructive Array Methods (modify the original array)**:
  - `push()` – Adds elements to the end.
  - `pop()` – Removes the last element.
  - `shift()` – Removes the first element.
  - `unshift()` – Adds elements to the beginning.
  - `splice()` – Adds/removes elements at specific positions.
  - `sort()` – Sorts the array (modifies original).
  - `reverse()` – Reverses the array in place.

- **Non-Destructive Array Methods (do not modify the original array)**:
  - `slice()` – Returns a portion of the array.
  - `concat()` – Combines arrays and returns a new one.
  - `map()` – Transforms each element and returns a new array.
  - `filter()` – Returns a new array with elements that pass a test.
  - `reduce()` – Reduces the array to a single value.
  - `find()` – Returns the first matching element.
  - `includes()` – Checks if an element exists in the array.
  - `indexOf()` – Returns the index of a given element.
  - `forEach()` – Executes a function for each element (doesn’t return a new array).
