let Input = [1, 0, 2, 5, 4, 9, 3, 3, 6, 7, 8, 10, 30, 12];

function findSecondLargestN(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

// const Input = [1,2,5,6,7,8]
// console.log(findSecondLargestN(Input));

function findLargest(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
// Input = [1,2,5,6,7,8,10,30,12]
// console.log(findLargest(Input));

function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}
// let Input = [1, 0, 2, 5, 6, 7, 8, 10, 30, 12];
// console.log(findSmallest(Input));

function findSecondSmallest(arr) {
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

// console.log(findSecondSmallest(Input));

function ReverseArray(arr) {
  let reverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  return reverse;
}

console.log(ReverseArray(Input));

function checkSortedArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return -1;
}
// console.log(checkSortedArray(Input));

function countFrequency(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  return frequency;
}

// console.log(countFrequency(Input));

function findDuplicates(arr) {
  let frequency = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;

      if (frequency[arr[i]] === 2) {
        duplicates.push(arr[i]);
      }
    } else {
      frequency[arr[i]] = 1;
    }
  }

  return duplicates;
}

console.log(findDuplicates(Input));

// First non-repeating element

function nonRepeatEL(arr) {
  let frequency = {};

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]] === 1) {
      return arr[i];
    }
  }

  return -1;
}

console.log(nonRepeatEL(Input));
