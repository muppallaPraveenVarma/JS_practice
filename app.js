console.log('Hi');
function lcm (n1,n2) {
    let m;
    m = Math.max(n1,n2);
    while(true){
    if ( m % n1 === 0  && m % n2 === 0){
    console.log(m);
    break;
    }
    m ++; 
   }
}
 lcm(3,4)