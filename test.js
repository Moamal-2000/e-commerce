let arr = ["d", "g"];

function reverse(arr) {
  let result = [],
    reversedIndex = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[reversedIndex];
    reversedIndex--;
  }

  return result;
}

console.log(reverse(arr));
