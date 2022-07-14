// 1
let array = [28, 43, -12, 30, 4, 0, 12]

let value = "False"


for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++) {
        if (i !== j) {
            if (array[i] + array [j] === 0){
                    value = "True"
            }
        }
    }
}
console.log(value)


// 2
function hasUniqueChars(word) {
    let obj = {};
    for (let i = 0; i <word.length; i++) {
        let uChar = word[i];
        if (obj[uChar]) return false;
        obj[uChar] = true;
    }
    return true;
}

console.log(hasUniqueChars('Monday'))
console.log(hasUniqueChars('Moonday'))

// 3
function isPangram(string){
    let strArr = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strArr.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))

// 4
function findLongestWord(str){
    str = str.split(" ")
    return str.sort((a, b) => b.length - a.length)[0]
}
       
console.log(findLongestWord("hi, hello"))