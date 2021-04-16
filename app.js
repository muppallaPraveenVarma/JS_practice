console.log('hi');
function halve(a) {
    let n = a.length;
    if (n%2==0) {
        let c = a.slice(0,n/2);
        console.log(c);
    }
    else {
        let c = a.slice(0,((n/2)+1))
        console.log(c);
        }
    }



   halve([3,5,0,3,4]);