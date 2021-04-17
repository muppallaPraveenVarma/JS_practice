console.log('hi');
let n;
let b;
let c;
let l;
function list(a) {
    
    n = a.length;
    if (n===0){
        return '';
    }
    else if (n===1){
        return a[0];
    }
    else{
    b = a.slice(0,n-1);
    l = a[n-1];
    c = b.join();
    console.log(b + ' and ' + l);
}
}



   list(['Huey', 'Dewey', 'Louie']);