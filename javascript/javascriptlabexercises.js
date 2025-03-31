//q1
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(4,6))
//q2
function maxOfThree(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}
console.log(maxOfThree(6,7,8))
//q3
function isVowel(char) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(char.toLowerCase())) {
        return true;
    }
    return false;
}
console.log(isVowel('b'))
//q4
function translate(text) {
    var translated = "";
    for (var i = 0; i < text.length; i++) {
        var char = text[i];
        if (/[b-df-hj-np-tv-z]/i.test(char)) { // Check if it's a consonant
            translated += char + 'o' + char;
        } else {
            translated += char;
        }
    }
    return translated;
}
console.log(translate('this is fun'))
//q5
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
//q6
function multiply(arr) {
    return arr.reduce((total, num) => total * num, 1);
}
console.log("SUM",sum([1,2,3,4,5,6]))
console.log("PROD",multiply([1,2,3,4,5,6]))
//q7
function reverse(str) {
    return str.split('').reverse().join('');
}
console.log("Reverse string of akagemakill is ",reverse('akagemakill'))
//q8
var lexicon = {
    "merry": "god",
    "christmas": "jul",
    "and": "och",
    "happy": "gott",
    "new": "nytt",
    "year": "år"
};

function translateChristmasCard(cardText) {
    var words = cardText.split(' ');
    var translatedWords = words.map(function(word) {
        return lexicon[word.toLowerCase()] || word;
    });
    return translatedWords.join(' ');
}
console.log(translateChristmasCard("Merry Christmas and Happy New Year"));

//q9
function findLongestWord(words) {
    let longest = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, "");
    return longest.length;
}
console.log(findLongestWord(["marde","mereko","koi","fayda","nhi","jeene","ka"]))

//q10
function filterLongWords(words, length) {
    return words.filter(word => word.length > length);
}
console.log(filterLongWords(["marde","mereko","koi","fayda","nhi","jeene","ka"],4))

//q11
function charFreq(str) {
    var freq = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if (freq[char]) {
            freq[char]++;
        } else {
            freq[char] = 1;
        }
    }
    return freq;
}
console.log(charFreq("commit karde bhai"))

//q13
var names = [];
var name;
while (name = prompt("Enter a name (or cancel to stop):")) {
    names.push(name);
}

names.sort();
alert("Sorted names: \n" + names.join("\n"));

