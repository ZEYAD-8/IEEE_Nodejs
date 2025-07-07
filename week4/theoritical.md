* **(5 pts.)** Write examples illustrating the use of each of the following:
    - Static properties
    ```js
  class Counter {
    static count = 0;
    constructor() {
      Counter.count++;
    }
  }
  new Counter();
  new Counter();
  console.log(Counter.count);


    - Private properties
    class Person {
    #ssn;

    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;
    }

    getSSN() {
        return this.#ssn;
    }
    }

    const p = new Person("Alice", "123-45-6789");
    console.log(p.name);
    console.log(p.getSSN());
    console.log(p.#ssn);


    - Setters and getters
    class Person {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (newName.length > 1) {
        this._name = newName;
        } else {
        console.log("Name is too short.");
        }
    }
    }

    const p = new Person("Alice");
    console.log(p.name);

    p.name = "Bob";
    console.log(p.name);

    p.name = "A";
    console.log(p.name);



    - Method chaining
    class Calculator {
    constructor(value = 0) {
        this.value = value;
    }

    add(num) {
        this.value += num;
        return this;
    }

    subtract(num) {
        this.value -= num;
        return this;
    }

    multiply(num) {
        this.value *= num;
        return this;
    }

    getResult() {
        return this.value;
    }
    }

    const result = new Calculator()
    .add(5)
    .subtract(2)
    .multiply(3)
    .getResult();

    console.log(result);




* **(5 pts.)** Explain the difference between `this` keyword's value in the following examples:

    - ```js
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce: () => {
                console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
            }
        }

        player.introduce();
        ```
    - ```js
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce() {
                console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
            }
        }

        player.introduce();
        ```
    - ```js
        function introduce() {
            console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
        }
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez",
            introduce
        }

        player.introduce();
        ```
    - ```js
        function introduce() {
            console.log(`Hey, I'm ${this.firstName} ${this.lastName}`);
        }
        const player = {
            firstName: "Ahmed",
            lastName: "Hafez"
        }

        introduce();
        introduce.call(player);
        ```
Answer:
- **Example 1:** Arrow function — `this` is lexically scoped (usually global), so `this.firstName` is `undefined`.

- **Example 2:** Method shorthand — `this` refers to the `player` object; works as expected.

- **Example 3:** Regular function assigned as method — called via `player.introduce()`, `this` is `player`.

- **Example 4:** Standalone function call — `this` is `undefined` (or global), so no access to properties.  
  Using `introduce.call(player)` sets `this` explicitly to `player`.



* **(5 pts.)** Create a `Vehicle` class which has 3 properties: color, number of wheels and horn. The color defaults to `"blue"`, the default value of number of wheels is `4` and the horn defaults to `"beep beep"`.

    Add a method `honkHorn()` which prints the value of the horn of the vehicle.

    Then create a `Bicycle` subclass that extends the Vehicle class. The `Bicycle` subclass should override Vehicle's constructor function by changing the default values for wheels from `4` to `2` and horn from `'beep beep'` to `'honk honk'`.

    Make each class in a separate module and use them together in a different module (main.js)

    Put your code in a GitHub repository and paste the link below.

* **(5 pts.)** Add the function `addHours()` to the prototype of the `Date` constructor. This function takes a number `H` as an argument and adds `H` hours to the date. Make sure that the function will be added to _ALL_ Date instances not only a single object.

    ```js
    let date = new Date(2022, 10, 3, 12, 38); // 2022-11-03T12:38:00.000Z
    date.addHours(4);
    console.log(date); // 2022-11-03T16:38:00.000Z
    ```

* **(5 pts.)** Implement a generator function that yields the numbers of Fibonacci's sequence starting from the beginning of the sequence.

    The well-known Fibonacci sequence $F(0), F(1), F(2), …$ is defined as follows:

    $F(0) = 0$

    $F(1) = 1$

    For each $i ≥ 2$: $F(i) = F(i−1) + F(i−2)$
