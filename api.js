exports.add = (x, y) => { return parseInt(x) + parseInt(y); }
exports.sub = (x, y) => { return x - y; }
exports.mul = (x, y) => { return x * y; }
exports.div = (x, y) => { return x / y; }
exports.mod = (x, y) => { return x % y; }
exports.fac = (n) => { 

    let somme = 1;
    for(let i = 1; i <= n; i++){
        somme = i*somme;
    }
    return somme;
}
exports.pre = (n) => {
    
    for(let i = 2; i < n; i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
exports.npre = (n) => {
    
    let compteur = 0;
    for(let i = 1; i <= 100; i++){

        if(n % i != 0){
            compteur++;
        }
        if(compteur == n){
            return i;
        }
    }
}