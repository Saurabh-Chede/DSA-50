// Find the Second Largest Number js Input: [10, 20, 5, 40, 25] Output: 25

let Input = [10, 20, 5, 40, 25];

// function findSecondLargestN(arr) {
//   let Largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > Largest) {
//       secondLargest = Largest;
//       Largest = arr[i]
//     }
//     else if (arr[i] > secondLargest && arr[i] !== Largest){
//       secondLargest = arr[i]
//     }
//   }

//   return secondLargest;
// }

// console.log(findSecondLargestN(Input));

// Count Frequency of Elements js Input: ["apple", "banana", "apple", "orange", "banana"] Output: { apple: 2, banana: 2, orange: 1 }

function count(arr) {
  let result = [];

  let count = 0;

  for (let fruit of arr) {
    count[fruit] = (count[fruit] || 0) + 1;
    result.push;
  }
}

// console.log(count(["apple", "banana", "apple", "orange", "banana"]));

// ilter and Transform Data js Input: [{ name: "John", age: 30 }, { name: "Alice", age: 17 }, { name: "Bob", age: 25 }] Output: ["John", "Bob"] (Condition: Return the names of users whose age is 18 or above)

function aboveAge(arr) {
  let result = arr.filter((user) => user.age >= 18);
  return result;
}

// console.log(aboveAge([{ name: "John", age: 30 }, { name: "Alice", age: 17 }, { name: "Bob", age: 25 }]));

// Remove Duplicates from an Array js Input: [1, 2, 2, 3, 4, 4, 5] Output: [1, 2, 3, 4, 5]

function RemoveDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let el = false;

    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        el = true;
        break;
      }
    }

    if (!el) {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(RemoveDuplicates([1, 2, 4, 3, 4, 4, 5]));

function RemoveDuplicates(arr) {
  let el = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
    }
    if (!el[arr[i]]) {
      el[arr[i]] = true;
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(RemoveDuplicates([1, 2, 3, 3, 4, 4, 5]));

