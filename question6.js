function sumAll(Array) {
  var maxNum = Math.max.apply(null, Array);
  var minNum = Math.min.apply(null, Array);
  var range = maxNum - minNum;
  var total = 0;
  for (var i = 1; i < range; i++) {
    total = total + minNum + i;
  }
  total = total + minNum + maxNum;
  return total;
}
sumAll([2, 8]);
