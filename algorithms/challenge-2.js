function checkPrime(num) {
    let factor = 0;
    for(let i =1; i<=num; i++) { //loop from 1 to the inputed number
        if(num%i == 0) { ///get the factor of the number
            factor ++;

        }
    }
    if(factor === 2) { // if equal to two, it is a prime number
        return true;
    
       }
       else {
        return false;
       }
}

module.exports = checkPrime