/*
    Given a sentence, reverse the words of the sentence.

    For example,"i live in a house" becomes "house a in live i"
*/

function reverseWords(s) {
    let end = s.length;
    let i = end - 1;
    const words = []; // words organized in reverse order
    
    while (i >= 0) {
        let char = s[i];
        if (char === " ") {
            words.push(s.slice(i + 1, end));
            end = i;
        }
        i--;
    }
    // loop did not include first word, append in words array
    words.push(s.slice(0, end));

    return words.join(" ");
}


let string = "i live in a house";
console.log(`String before:  '${string}'`)
console.log(`String after:  '${reverseWords(string)}'`)