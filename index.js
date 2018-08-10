// function declaration
function isPrime(num) {
    if(num==2) {                  //condition for 2 as the prime number
        return true;
    }
    for(var i=2; i<num; i++) {
        if(num % i==0) {          //condition for non prime numbers
            return false
        }
        else if (i=num) {         //condition for prime numbers
            return true; 
        }
    }
}
console.log(isPrime(98));         //returns false
console.log(isPrime(97));         //returns true