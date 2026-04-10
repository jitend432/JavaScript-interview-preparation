function findDublicateChar(str) {
    let map = {}
    let dublicate = []
    for(let char of str) {
        map[char] = (map[char] || 0) +1
        if(map[char] === 2) {
            dublicate.push(char);
        }
    }
    return dublicate;
}
console.log(findDublicateChar("Aniimaal"));

//-------------------------------------------------------

function dublicateWord(str) {
    let word = str.split(" ")
    let map = {}
    let dubli = []

    for(let char of word) {
         map[char] = (map[char] || 0) + 1
         if(map[char] === 2) {
            dubli.push(char);
         }
    }
    return dubli;
}
console.log(dublicateWord("Haa Haa mai jitu hu hu"))