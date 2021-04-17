console.log('hi');
function median(a) {
    let m;
    let f,g;
    let n = a.length;
    if (n % 2 == 0) {
        f = a[(n/2)-1];
        g = a[(n/2)];
        m = (f+g)/2;
        console.log(m);
    }
    else {
        m = a[Math.floor(n / 2)];
        console.log(m)
    }
}

median([1, 2, 10, 100]);


