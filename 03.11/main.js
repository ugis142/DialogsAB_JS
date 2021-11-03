function main1() {
    /*
    const factorial = function fac(n) {
    
        const para = document.createElement('p');
        document.body.appendChild(para);
        para.textContent = 'Value: ' + n;
    
        return n < 2 ? 1 : n * fac(n - 1);
    }
    */
    let n = 10;
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = 'Factorial of: ' + n + ' is ' + factorial(n);
    return 0;
}
function factorial(n) {
    const para = document.createElement('p');
    document.body.appendChild(para);
    para.textContent = 'Value: ' + n;
    if (n < 2) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
    //return n < 2 ? 1 : n * fac(n - 1)
}