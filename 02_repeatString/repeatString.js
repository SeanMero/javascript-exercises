const repeatString = function(string, number) {
    let bigString = ''
    if (number < 0) {
        return 'ERROR'
    }
    else {   
        for (i = 1; i < number + 1; i++) {
            bigString = bigString + string
        }
    }    
    return bigString
};

// Do not edit below this line
module.exports = repeatString;
