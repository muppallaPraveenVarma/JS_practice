console.log('Hi');
let i,m,sum=0;
function mean(a){
    for (i=0;i<a.length;i++){
        sum = sum + a[i];
             
    }
    
    console.log(sum/a.length);
}


mean([1, 2, 3]);