function isSubstring(str, sub) {
  for (let i = 0; i < str.length; i++) {
    if (str.slice(i, i + sub.length) === sub) {
      return true;
    }
  }
  return false;
}

function isSubstringNative(str, sub) {
  return str.indexOf(sub) !== -1;
}

function isSubstringManual(str, sub) {
  for (let i = 0; i < str.length - sub.length; i++) {
    for(let j = 0; j < sub.length && str[i + j] === sub[j]; j++) {
      if(j === sub.length - 1) {
        return true;
      }
    }
  }
  return false;
}

console.log(isSubstringNative('esto que quedaes', 'que') === true);
console.log(isSubstringManual('esto que quedaes', 'que') === true);
console.log(isSubstring('esto que quedaes', 'que') === true);
