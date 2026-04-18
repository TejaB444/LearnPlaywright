
What is an object in JavaScript?

In JavaScript, an object is a standalone collection of related data and functionality. While primitive data types (like strings or numbers) hold a single value, an object acts as a container for multiple values stored as properties. 
Think of an object like a real-world physical object. A car, for example, has properties like color (blue) and model (sedan), and actions it can perform, like drive. 

1. Structure: Key-Value Pairs
Objects are written with curly braces {} and contain "key: value" pairs: 
Key (or Property Name): A string that identifies the piece of data.
Value: Can be anything—a string, number, array, or even another object.

const user = {
  name: "Alex",         // Key: "name", Value: "Alex"
  age: 28,              // Key: "age", Value: 28
  isAdmin: true         // Key: "isAdmin", Value: true
};

2. Methods: Objects Can "Do" Things
If a property contains a function, it is called a method. Methods represent the behavior of the object.

const dog = {
  breed: "Golden Retriever",
  bark: function() {
    console.log("Woof!");
  }
};

dog.bark(); // Output: Woof!

How do you access object properties?

You can interact with an object's properties using two types of notation: 
Dot Notation: user.name (most common and readable).
Bracket Notation: user["name"] (useful if the key is stored in a variable or has spaces). 

Difference between dot and bracket notation

The main difference lies in flexibility. While dot notation is cleaner and faster to write, bracket notation allows you to handle dynamic data that dot notation cannot.


1. Dot Notation (object.property)

This is the standard way to access data. It is easy to read but has strict rules.
Static: You must know the exact name of the key when writing the code.
Rules: The key name must follow JavaScript variable naming rules (no spaces, cannot start with a number).


const user = { name: "Alex" };
console.log(user.name); // "Alex"

2. Bracket Notation (object["property"])

This is the "power user" method. It treats the key as a string or an expression.
Dynamic: You can use a variable to decide which key to access at runtime.
Flexible: You can access keys that have spaces, symbols, or start with numbers.

const user = { 
  "first name": "Alex",
  age: 28 
};

// 1. Handling spaces
console.log(user["first name"]); // "Alex" (user.first name would fail)

// 2. Using a variable
const keyToLookup = "age";
console.log(user[keyToLookup]); // 28

Comparison Table :
Feature	                    Dot Notation	        Bracket Notation
Syntax	                    obj.key	                    obj["key"]
Can use Variables?	        No	                        Yes (obj[varName])
Keys with Spaces?	        No	                        Yes
Keys starting with Numbers?	No	                        Yes
Readability	                High	                    Moderate

When to use which?
Use Dot Notation 90% of the time for clean, readable code.
Use Bracket Notation when the property name is stored in a variable (like in a loop) or if the property name contains special characters.


How to add and delete properties?

Adding and deleting properties is straightforward, and you can use either dot or bracket notation depending on whether your property name is fixed or dynamic.
1. Adding/Updating Properties
In JavaScript, objects are dynamic, so you can simply assign a value to a key that doesn't exist yet, and it will be created.

dot notation:

const player = { name: "Mario" };

player.score = 100;    // Adds a new property
player.name = "Luigi"; // Updates an existing property

Using Bracket Notation (Dynamic):
This is useful if the property name is stored in a variable.

const powerUp = "ability";
player[powerUp] = "Super Jump"; 

// Result: { name: "Luigi", score: 100, ability: "Super Jump" }


2. Deleting Properties
To remove a property entirely from an object, use the delete operator. This removes both the value and the key itself.

const car = { brand: "Tesla", model: "Model 3", autopilot: true };

delete car.autopilot; 

console.log(car); // { brand: "Tesla", model: "Model 3" }

Note on deletion: delete returns true if it successfully removes the property (or if the property didn't exist to begin with).

3. The "Modern" Way (Non-Mutating)

In frameworks like React, it is often better to create a new object without the property instead of deleting it from the original. You can do this using the Rest pattern we discussed earlier:

const user = { id: 101, username: "dev_alex", email: "alex@test.com" };

// Create a new object 'cleanedUser' that has everything EXCEPT 'email'
const { email, ...cleanedUser } = user;

console.log(cleanedUser); // { id: 101, username: "dev_alex" }

How to check if a property exists?

There are four main ways to check if a property exists in a JavaScript object, each behaving slightly differently regarding inheritance and undefined values. 

1. The in Operator (Most Versatile)

The in operator returns true if a property exists on the object or anywhere in its prototype chain (inherited properties). 
Best for: Checking if an object has access to a property or method, regardless of where it came from. 

const car = { make: "Tesla" };
console.log("make" in car);      // true
console.log("toString" in car);  // true (inherited from Object)


2. Object.hasOwn() (Modern Standard)

Introduced in ES2022, this is the recommended replacement for hasOwnProperty. It only checks for "own" properties (defined directly on the object) and ignores inherited ones. 

Best for: General property checks on plain objects.

const car = { make: "Tesla" };
console.log(Object.hasOwn(car, "make"));     // true
console.log(Object.hasOwn(car, "toString")); // false

3. obj.hasOwnProperty() (Legacy Method)

Works exactly like hasOwn() but as an instance method. It has a vulnerability: it can fail if an object was created without a prototype (e.g., Object.create(null)) or if the property name itself is overwritten with "hasOwnProperty". 

Best for: Legacy codebases, though Object.hasOwn() is safer for modern apps

4. Strict Inequality Check (!== undefined)
You can simply check if accessing the property returns undefined. 

Warning: This will give a false negative if the property actually exists but its value was intentionally set to undefined.

const car = { make: undefined };
console.log(car.make !== undefined); // false (incorrectly suggests it doesn't exist)
console.log("make" in car);          // true (correct)

Comparison Summary:
Method	        Checks Own?	        Checks Inherited?	        Handles undefined value?
in	                Yes	                Yes	                        Yes
hasOwn              Yes	                No	                        Yes
!== undefined	    Yes	                Yes	                        No

What is Object.keys()? Object.values()? Object.entries()?


These three methods are the standard tools for iterating over objects. Since you can't use a regular for loop on an object like you can with an array, these methods turn an object's parts into arrays so you can work with them.
Here is a sample object to use as an example:

const user = {
  name: "Alex",
  role: "Admin",
  age: 28
};

1. Object.keys(user)
Returns an array of the object's property names (keys).
Use case: When you only care about the labels/headers of the data.
Result: ["name", "role", "age"]
2. Object.values(user)
Returns an array of the object's values.
Use case: When you only care about the data itself (e.g., summing up a list of prices).
Result: ["Alex", "Admin", 28]
3. Object.entries(user)
Returns an array of arrays, where each sub-array is a [key, value] pair.
Use case: Perfect for loops or when you need both the label and the data at the same time.
Result: [["name", "Alex"], ["role", "Admin"], ["age", 28]]

The most common way to use these is with a .forEach() or a for...of loop. Object.entries() is particularly powerful when combined with array destructuring:

for (const [key, value] of Object.entries(user)) {
  console.log(`${key}: ${value}`);
}

// Output:
// name: Alex
// role: Admin
// age: 28

How to loop through an object?

Since objects aren't "iterable" like arrays (you can't just use a standard for loop), you have three main ways to get the job done. 
1. The Modern Way: for...of with Object.entries()
This is the cleanest and most popular method today. It gives you both the key and the value immediately using array destructuring. 

const fruits = { apple: 5, banana: 10, orange: 8 };

for (const [fruit, count] of Object.entries(fruits)) {
  console.log(`There are ${count} ${fruit}s.`);
}

2. The Traditional Way: for...in
This loop was specifically designed for objects. It iterates over all enumerable keys. 
Crucial Rule: Always use Object.hasOwn() (or hasOwnProperty) inside this loop. Otherwise, it might accidentally grab properties inherited from the object's "parents" (prototype chain). 

const user = { name: "Alex", role: "Admin" };

for (const key in user) {
  if (Object.hasOwn(user, key)) {
    console.log(`${key}: ${user[key]}`); // Must use bracket notation here!
  }
}


3. The Functional Way: Object.keys() + .forEach() 
If you prefer the "dot-chaining" style used with arrays, turn the keys into an array first.


const prices = { laptop: 1000, mouse: 20 };

Object.keys(prices).forEach(item => {
  console.log(`${item} costs $${prices[item]}`);
});


Which one should you use?
for...of with Object.entries(): Use this 90% of the time. It’s the most readable and avoids inheritance bugs.
for...in: Only use if you specifically need to include inherited properties (rare) or are working in a very old environment.
Object.keys().forEach(): Good if you are already doing a lot of array-style functional programming. 