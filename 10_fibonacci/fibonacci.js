const fibonacci = function(n) {
    let answer = [];
    if (n < 0) {
        return "OOPS";
    } else if (n >= 0) {
        for (let i = 0; i <= n; i++) {
            if (i === 0) {
                answer.push(0)
            } else if (i === 1) {
                answer.push(1);
            } else {
                answer.push(answer[i-1] + answer[i-2])
            }
        };
        return answer[n];
    };
};

// Do not edit below this line
module.exports = fibonacci;
