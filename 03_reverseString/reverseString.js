const reverseString = function(text) {
    let splitText = text.split("");
    let length = text.length;
    let reverseArray = []
    for (i = 1; i <= length; i++) {
        reverseArray.push(splitText.at(-i))
    }
    let reverseText = reverseArray.join("")
    return reverseText
};

// Do not edit below this line
module.exports = reverseString;
