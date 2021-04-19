console.log('Hi');
function cutComment(a) {
 
    if (!a.includes('//')){
    console.log(null);
    }
    else { 
    let n = a.indexOf('/');
    let g = a.length;
    let c = a.substr (n+3,g);
    console.log(c);
    }
   }

cutComment('let foo; // bar');