function removePunctuation(text) {
    const punctuation = /[\.,?!]/g;
    let newText = text.replace(punctuation, "");
    return newText;
  }
  

const palindromes = function(str) {
    const cleaned = removePunctuation(str);
    const old = cleaned.split('');
    //console.log(old);
    let newArr = [];
    //console.log(newArr);
    for (let i = old.length -1; i >= 0; i--) {
        newArr.push(old[i]);
        //console.log(newArr);
    }
    let answer = newArr.join('');
    //console.log(answer);
    //console.log(str);
    return answer === cleaned;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
