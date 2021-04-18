console.log('Hi');
let i, sum;
function addTo(n){
    sum = 0
    for (i=n;i>=0;i--){
        sum = sum + i;
        
    }
    return sum;
}

addTo(4);
