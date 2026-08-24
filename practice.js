// closure

function Parent() {
  let money = 10000;

  return function child() {
    // console.log(money);
  };
}

// let myfn = Parent()
// myfn()

// async

// console.log(`start`);

// console.log(`end`);

// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data => console.log(data));

async function fetchpost() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    if (!response.ok) {
      throw new Error(`error fetching response`);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error.message);
  }
}

// fetchpost();

function findLargestElemnt(arr) {
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

console.log(findLargestElemnt([1, 2, 10, 40, 5]));

function ReverseArray(arr) {
  let result = [];
  for (let i = arr.length-1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result
}

console.log(ReverseArray([1,2,3,4,5,6]));



