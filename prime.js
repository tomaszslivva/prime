function isPrime(number) {
    if(number < 2) {
        return false;
    }
    
    for (let i = 2; i < number; i++) {
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

function prime(n){
    let arr = [];
    let x = 0;

    while(arr.length < n){
        if(isPrime(x)) {
            arr.push(x);
        }
        x++;
    }
    
    return console.log(arr);
}
