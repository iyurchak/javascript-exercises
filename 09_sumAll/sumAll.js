const checkNumber = function(num) {
    if (typeof num === 'number' &&
    num >= 0 &&
    num % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

const sumAll = function(a, b) {
    if (!(checkNumber(a) && checkNumber(b))) {
        return 'ERROR';
    }
    let sum = 0;
    if (a > b) {
        for (let i = b; b <= a; b++) {
            sum += b;
        }
    } else {
        for (let i = a; a <= b; a++) {
            sum += a;
        }
    }
    return sum;
};

console.log(sumAll(1,3));

// Do not edit below this line
module.exports = sumAll;
