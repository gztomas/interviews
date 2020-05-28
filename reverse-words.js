function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}

function reverseArray(arr, from = 0, to = arr.length) {
  for (let i = from; i < (to + from) / 2; i++) {
    let temp = arr[i];
    arr[i] = arr[to - i - 1];
    arr[to - i - 1] = temp;
  }
  return arr;
}

function reverseWordsHard(sentence) {
  let arr = sentence.split("");
  reverseArray(arr);
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char === " ") {
      reverseArray(arr, start, i);
      start = i + 1;
    }
  }
  return arr.join("");
}

console.log(reverseWordsHard("How are you doing"));
