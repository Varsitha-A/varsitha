function checkOdd(numbers) {
  const results = numbers.map(num => num % 2 !== 0);
  console.log("Odd check results:");
  console.log(results);
}

const nums = [3, 8, 15, 22, 9, 14, 5, 6, 11, 18];
checkOdd(nums);
function checkOddOrEven(numbers) {
  console.log("Given Numbers:");
  console.log(numbers);
  const results = numbers.map(num => {
    if (num % 2 !== 0) {
      console.log(num + " is Odd → true");
      return true;
    } else {
      console.log(num + " is Even → false");
      return false;
    }
  });
  console.log("Final Results (true = odd, false = even):");
  console.log(results);
}
const numbersArray = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29];
checkOddOrEven(numbersArray);
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits.reduce((acc, fruit) => {
    if (acc[fruit]) {
        acc[fruit] += 1;
    } else {
        acc[fruit] = 1;
    }
    return acc;
}, {});

console.log(fruitCount);
const numbers = [1, 2, 3, 4, 5];
const tripled = numbers.map(num => num * 3);
const filtered = tripled.filter(num => num > 5);

const sum = filtered.reduce((acc, num) => acc + num, 0);

console.log("Tripled numbers:", tripled);
console.log("Filtered numbers (>5):", filtered);
console.log("Sum of filtered tripled numbers:", sum);
