function rangeOfNumbers(startN, endN) {
    if (startN > endN) {
        return []}
        else {
           return [ startN, ...rangeOfNumbers(startN + 1, endN) ]
            
        }
    }
        console.log(rangeOfNumbers(1,7));
        console.log(rangeOfNumbers(3,10));
        console.log(rangeOfNumbers(7,5));
        console.log(rangeOfNumbers(5,5));
        
module.exports = rangeOfNumbers;

