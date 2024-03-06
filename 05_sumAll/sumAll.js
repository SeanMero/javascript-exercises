const sumAll = function(a, b) {
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }
    let summation = 0;
    let small = 0;
    let big = 0;
    if (a < b) {
        small = a;
        big = b;
    } else {
        small = b;
        big = a;
    }
    for (i = small; i <= big; i++) {
        summation = summation + i
    }
    return summation;
};

// Do not edit below this line
module.exports = sumAll;
