let Input = [1, 0, 2, 5, 4, 9, 3, 3, 6, 7, 8, 10, 30, 12];

function findSecondLargestN(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
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

// console.log(ReverseArray(Input));

function checkSortedArray(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
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

// console.log(findDuplicates(Input));

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

// majority elemet

function majorityEl(arr) {
  let frequency = {};
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }

  for (let key in frequency) {
    if (frequency[key] > arr.length / 3) {
      result.push(Number(key));
    }
  }

  return result;
}

// console.log(majorityEl([1, 2, 2, 2, 2, 3, 3, 3, 5, 5]));

// Reverse string

function ReverseStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

console.log(ReverseStr("saurabh"));

function removeDupFromSArray(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[j] !== arr[i]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(removeDupFromSArray([1, 2, 3, 3, 4, 5, 6]));

// merged sorted arrays

function mergedSortedArr(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

console.log(mergedSortedArr([1, 2, 3], [4, 5, 6]));

// group anagrams

function groupAnagrams(strs) {
  let map = new Map();

  for (const word of strs) {
    let key = word.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key).push(word);
  }

  return [...map.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return `— not a palindrome`;
    }

    left++;
    right--;
  }

  return `— str is plaindrome`;
}

// console.log(checkPalindrome('TENET'));


// —— count vowels from string.

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  str = str.toLowerCase();

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

