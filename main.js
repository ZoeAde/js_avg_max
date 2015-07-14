var calc = {
average: function (array) {
  var total = array.reduce(function(a, b) {return a + b});
  return total/array.length
},
maximum: function (array) {
  var largest=0
  for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  return largest;
  }
}
};

console.log("The average of the array is " + calc.average(array) + " and the max value is " + calc.maximum(array) +".");
