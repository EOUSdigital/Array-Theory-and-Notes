//TODO Module 3 - Lesson 05: Array Challenges

//* 🎯 Lesson Objectives

//  By the end of this lesson, we will:
//  • Apply core array methods (map(), filter(), reduce(), etc.) to solve practical challenges.
//  • Understand when and why to use specific array methods.
//  • Recognize common pitfalls when working with arrays.
//  • Develop problem-solving strategies using arrays in JavaScript.
//  • Reflect on different approaches and evaluate trade-offs in solutions.

//? 1️⃣ Theoretical Aspects (In-Depth Theory)

//* A. 🔹 Key Array Methods Recap

//  Before jumping into challenges, here is a quick refresher on essential array methods:

//? Method              Purpose                                         Example
//  map()               Transforms each element                         arr.map(x => x * 2)
//  filter()            Filters elements based on a condition           arr.filter(x => x > 5)
//  reduce()            Reduces array to a single value                 arr.reduce((a, b) => a + b)
//  forEach()           Executes a function for each element            arr.forEach(x => console.log(x))
//  find()              Finds the first element matching a condition    arr.find(x => x > 10)
//  some()              Checks if any element passes a test             arr.some(x => x < 0)
//  every()             Checks if all elements pass a test              arr.every(x => x > 0)

//* B. 💡 Contextual Understanding

//  • Why use map over forEach?
//  map returns a new array, making it ideal for transformations. forEach is better for side effects (like logging).

//  • When is reduce powerful?
//  When you need to calculate a single value—like sums, averages, or even building objects.

//* C. 🕰️ Historical Perspective

//  Array methods like map, filter, and reduce became popular with functional programming concepts in JavaScript ES5+. They help write cleaner, more declarative code compared to traditional for loops.

//* D. ⚡ Best Practices & Pitfalls

//  • ✅ Use immutable methods (map, filter, reduce) to avoid unexpected side effects.
//  • ⚠️ Avoid using reduce if it makes code unreadable—clarity over cleverness!
//  • ❌ Do not forget that methods like map and filter return new arrays—they don’t mutate the original.

//* E. 🎲 Real-World Analogy

//  Think of an array like a conveyor belt:
//  • map = Each item gets painted a new color.
//  • filter = Only items that pass inspection stay on the belt.
//  • reduce = All items are combined into one final product.

//? 2️⃣ Inquiry and Application

//  🤔 Guided Critical Thinking
//  • Why might you prefer filter over a for loop with if conditions?
//  • How does reduce help in scenarios like calculating totals in a shopping cart?
//  Now, let’s put this into practice!

//? 3️⃣ Exercises: Array Challenges
//  We will start simple and build up! 😎


//TODO  🧠 Complex Array Challenges - Part 1


//* 🔸 Challenge 1: Double the Numbers
//  Given an array of numbers, return a new array where every number is doubled.
//! ➡️ Which method will you use? Why?

const numbers = [1, 2, 3, 4, 5];

//! Solution

// For this challenge I will use .map() because this method will transform each element.

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);


//* 🔸 Challenge 2: Filter Long Words
//  Given an array of words, return only the words longer than 4 letters.

const words = ['tree', 'mountain', 'sky', 'river', 'cloud'];

// For this challenge I will use .filter() because this method will filter elements based on a condition.

const newWords = words.filter(word => word.length > 4);
console.log(newWords);


//* 🔸 Challenge 3: Total Price Calculator
//  We have an array of product prices. Calculate the total price.

const prices = [19.99, 9.99, 4.99, 49.99];

// For this challenge I will use .reduce() because will reduce array to a single value.

const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);


//* 🔸 Challenge 4: Find the First Even Number

const nums = [1, 3, 7, 8, 10, 13];

//! Solution

// For this challenge I will use .find because this method will find the first element matching a condition.

const evenNumber = nums.find(num => num % 2 === 0);

console.log(evenNumber);


//* 🔸 Challenge 5: Advanced - Chained Methods
//  Given an array of numbers, double the odd numbers and return the sum.
//  Hint: Use filter, map, and reduce together.

const nums2 = [1, 2, 3, 4, 5];

//! Solution

// For this challenge, I will use a filter, map, and reduce together because these methods will chain elements to provide the expected result.

const chainedMethods = nums2.filter(num => num % 2 !== 0).map(num => num * 2).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(chainedMethods);


//* ⚡ Critical Thinking Prompts:

//? 1. What if all numbers were even?

//* Step 1 - filter, map, and reduce together

const nums3 = [2, 4, 6];

const criticalThinkingPrompts = nums3
    .filter(num => num % 2 !== 0)
    .map(num => num * 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(criticalThinkingPrompts);

//! Result: 0 - because I used a filter, map, and reduce together

//* Step 1 - reduce only

const nums4 = [2, 4, 6];

const criticalThinkingPrompts2 = nums3
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(criticalThinkingPrompts2);

//! Result: 12 - because I used ony reduce

//? 2. Could this logic be optimized for readability by breaking it into steps?
//  Sometimes, clarity is preferred over chaining everything in one line. For example:

const oddNumbers = nums2.filter(num => num % 2 !== 0);
const doubled = oddNumbers.map(num => num * 2);
const sum = doubled.reduce((acc, curr) => acc + curr, 0);

//! Solution

// Yes, we could break this logic into steps to optimize readability.

//? 3. How would you explain the trade-offs between chaining vs. breaking into steps to a junior dev?

//   Initially, we might want to break these operations into steps. This will help us understand what each part is doing and make it easier to find bugs. As we become more familiar with these operations, consider chaining them to make the code more concise and expressive. The key is to strike a balance between readability and conciseness based on the complexity of the operations.


//TODO  🧠 Complex Array Challenges - Part 2


//* 🔥 Challenge 1: Top Students List
//  You have an array of student objects.
//  Get a list of names of students who scored over 85.

const students = [
    { name: 'Alice', score: 82 },
    { name: 'Bob', score: 91 },
    { name: 'Charlie', score: 88 },
    { name: 'Dave', score: 70 },
];

//! Solution

const scoredOver = students
    .filter(student => student.score > 85)
    .map(student => student.name);

console.log(scoredOver);


//* 🔥 Challenge 2: Total Cost of Items In Stock
//  Given a list of products, calculate the total price of all items that are currently in stock.

const products = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Phone', price: 500, inStock: false },
    { name: 'Tablet', price: 750, inStock: true },
];

//! Solution

const totalPrice = products
    .filter(product => product.inStock)
    .reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);

console.log(totalPrice);


//* 🔥 Challenge 3: Sort Books by Page Count (Descending)
//  We have an array of books.
//  Return an array of book titles sorted by their page counts from highest to lowest.

const books = [
    { title: 'Book A', pages: 200 },
    { title: 'Book B', pages: 150 },
    { title: 'Book C', pages: 300 },
];

//! Solution

const pageCounts = books
    .sort((a, b) => b.pages - a.pages)
    .map(book => book.title);

console.log(pageCounts);


//* 🔥 Challenge 4: Find the Oldest Person
//  Given an array of people with their birth years, find the oldest person.

const people = [
    { name: 'Eve', birthYear: 1980 },
    { name: 'Frank', birthYear: 1970 },
    { name: 'Grace', birthYear: 1990 },
];

//! Solution

const oldestPerson = [...people]
    .sort((a, b) => a.birthYear - b.birthYear)[0];

console.log(oldestPerson);


//* 🔥 Challenge 5: Average Age Calculation
//  Given an array of users with their ages, calculate the average age.

const users = [
    { username: 'user1', age: 20 },
    { username: 'user2', age: 30 },
    { username: 'user3', age: 40 }
];

//! Solution

const averageAge = users.length ? users
    .map(user => user.age)
    .reduce((a, b) => a + b, 0) / users.length : 0;

console.log(averageAge);
