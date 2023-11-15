// example of axios post command

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  axios.post("https://reqres.in/api/login", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
    });
});

btn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  axios.delete("https://reqres.in/api/login", {
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
    });
})

// difference in for loops

const arr1 = [1, 2, 3];
for (let i in arr) {
  console.log(i); // logs "0", "1", "2"
}

const arr2 = [1, 2, 3];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]); // logs 1, 2, 3
}



// Using forEach to iterate over the array

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number);
});


const jsonData = {
  data: [
    { name: "Alice", scores: [85, 90, 78] },
    { name: "Bob", scores: [76, 88, 92] }
  ]
};

jsonData.data.forEach(item => {
  console.log(item.name); // Access top-level properties
  item.scores.forEach(score => {
    console.log(score); // Access nested array elements
  });
});

// ==========================================================



// Using map to create a new array based on the original array

const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(number) {
  return number * 2;
});
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

const doubledScores = jsonData.data.map(item => {
  return item.scores.map(score => score * 2);
});
console.log(doubledScores);

//============================================================================



// Using for...of to iterate over the array

const fruits = ["apple", "banana", "cherry", "date"];
for (const fruit of fruits) {
  console.log(fruit);
}

const jsonData2 = {
  data: [
    { name: "Alice", scores: [85, 90, 78] },
    { name: "Bob", scores: [76, 88, 92] }
  ]
};

for (const item of jsonData.data) {
  console.log(item.name); // Access top-level properties
  for (const score of item.scores) {
    console.log(score); // Access nested array elements
  }
}

//==============================================================================


function isPrime(number) {
  if (number <= 1) {
    return false; // 1 and numbers less than 1 are not prime
  }
  if (number <= 3) {
    return true; // 2 and 3 are prime
  }
  
  if (number % 2 === 0 || number % 3 === 0) {
    return false; // Numbers divisible by 2 or 3 are not prime
  }
  
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false; // Numbers divisible by i or i + 2 are not prime
    }
  }
  
  return true; // If it passes all checks, it's prime
}

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, '');
  return str === str.split('').reverse().join('');
}


function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function twoSum(nums, target) {
  const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
}

function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i]) && charMap.get(s[i]) >= start) {
      start = charMap.get(s[i]) + 1;
    }
    charMap.set(s[i], i);
    maxLength = Math.max(maxLength, i - start + 1);
  }

  return maxLength;
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    if (this.cache.has(key)) {
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }

  put(key, value) {
    if (this.cache.size >= this.capacity) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    this.cache.set(key, value);
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}




