function merge(left, right) {
  let result = [],
    il = 0,
    ir = 0;

  while (il < left.length && ir < right.length) {
    if (left[il] < right[ir]) {
      result.push(left[il++]);
    } else {
      result.push(right[ir++]);
    }
  }

  return result.concat(left.slice(il)).concat(right.slice(ir));
}

function mergeSort(items) {

  // Terminal case: 0 or 1 item arrays don't need sorting
  if (items.length < 2) {
    return items;
  }

  let middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function mergeSortInPlace(items) {

  if (items.length < 2) {
    return items;
  }

  let middle = Math.floor(items.length / 2),
    left = items.slice(0, middle),
    right = items.slice(middle),
    params = merge(mergeSortInPlace(left), mergeSort(right));

  // Add the arguments to replace everything between 0 and last item in the array
  params.unshift(0, items.length);
  items.splice.apply(items, params);
  return items;
}
