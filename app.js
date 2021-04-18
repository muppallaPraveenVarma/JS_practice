console.log('Hi');
let i, sum;
function factorial(n){
    sum = 1
    for (i=n;i>0;i--){
        sum = sum * i;
        
    }
    console.log(sum);
}

factorial(5);
