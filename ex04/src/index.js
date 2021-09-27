function sumFibonacci(num) {

    if(num < 1) return 0;
    var a = 0, b = 1, sum = a + b;
    while(true) {
      var next = a + b;
      if(next >= num) {
        break;
      }
      if(next % 2) {
        sum += next;
      }
      a = b;
      b = next;
    }
    return sum

}

console.log (sumFibonacci(1))
console.log (sumFibonacci(10))
console.log (sumFibonacci(20))
console.log (sumFibonacci(4))
console.log (sumFibonacci(-5))

module.exports = sumFibonacci;