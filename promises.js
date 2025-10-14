// Function that returns a Promise
// function fetchItems() {
//   return new Promise((resolve, reject) => {
//     // Simulate a delay (like fetching data from server)
//     setTimeout(() => {
//       const success = true; // change to false to simulate error
//       if (success) {
//         resolve(["Apple", "Banana", "Orange", "Mango"]);
//       } else {
//         reject("Error: Could not fetch items!");
//       }
//     }, 2000); // 2 seconds delay
//   });
// }

// // Using the Promise
// fetchItems()
//   .then(items => {
//     console.log("Items fetched successfully:");
//     items.forEach((item, index) => {
//       console.log(`${index + 1}. ${item}`);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });
// fetch('https://jsonplaceholder.typicode.com/todos')
//       .then(response => response.json())
//       .then(json => console.log(json))
// Function that returns a Promise with objects
// function fetchItems() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const success = true;
//       if (success) {
//         resolve([
//           { id: 1, name: "Apple", price: 50 },
//           { id: 2, name: "Banana", price: 20 },
//           { id: 3, name: "Orange", price: 30 }
//         ]);
//       } else {
//         reject("Error: Could not fetch items!");
//       }
//     }, 2000);
//   });
// }

// // Fetch only the "name" field from each item
// fetchItems()
//   .then(items => {
//     const itemNames = items.map(item => item.name); // Extract only 'name'
//     console.log("Item Names:", itemNames);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// Function that returns a Promise
// function fetchItems() {
//   return new Promise((resolve, reject) => {
//     // Simulate a delay (like fetching data from server)
//     setTimeout(() => {
//       const success = true; // change to false to simulate error
//       if (success) {
//         resolve(["Apple", "Banana", "Orange", "Mango"]);
//       } else {
//         reject("Error: Could not fetch items!");
//       }
//     }, 2000); // 2 seconds delay
//   });
// }

// // Using the Promise
// fetchItems()
//   .then(items => {
//     console.log("Items fetched successfully:");
//     items.forEach((item, index) => {
//       console.log(`${index + 1}. ${item}`);
//     });
//   })
//   .catch(error => {
//     console.error(error);
//   });
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(todos => {
//     const titles = todos.map(todo => todo.title); // extract only the title field
//     console.log(titles);
//   })
//   .catch(error => console.error('Error:', error));
let name="Varsitha";
let age=20;
console.log(`I am ${name} and My age:${age}`);