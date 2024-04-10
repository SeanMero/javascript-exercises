function removePunctuation(text) {
    const punctuation = /[\.,?!]/g;
    let newText = text.replace(punctuation, "");
    newText = newText.replace(/\s+/g, '')
    return newText;
  }
  

const palindromes = function(str) {
    let cleaned = removePunctuation(str);
    console.log(cleaned);
    cleaned = cleaned.toLowerCase();
    const old = cleaned.split('');
    console.log(old);
    let newArr = [];
    console.log(newArr);
    for (let i = old.length -1; i >= 0; i--) {
        newArr.push(old[i]);
        console.log(newArr);
    }
    let answer = newArr.join('');
    console.log(answer);
    console.log(str);
    return answer === cleaned;
};

palindromes('A car, a man, a maraca.');

// Do not edit below this line
module.exports = palindromes;
