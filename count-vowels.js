// Write a function to count the number of vowels in a string.

const str = 'My name is Tuhin Al Rakib'

// 1 No Way=======
function countVowels(str){
    let count = 0
    for (let i=0;i<str.length;i++){
        if(str[i] === "a" || str[i] ==="e" || str[i] === "i" || str[i] === "o" || str[i] === 'u' || str[i] === "A" || str[i] === "E" || str[i] === "I" || str[i] === "O" || str[i] === "U"){
            count += 1
        }
    }
    return count
}
const vw = countVowels(str)
console.log(vw)

// 2 No Way=======

function countVowels2(str){
    const vowels = 'aeiouAEIOU'
    let count = 0

    for(let i = 0; i <str.length; i++){
        if(vowels.includes(str[i])){
            count += 1
        }
    }
    return count
}

const vowel = countVowels2(str)

console.log(vowel)