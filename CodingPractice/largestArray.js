function largestArray (arr) {
    let max = arr[0]

    for(let i = 1; i < arr.length; i++) {
        if(arr[i]> max) {
            max = arr[i]
        }
    }
    return max
}

function bigArr(arr) {
    return Math.max(...arr)
}
console.log("Largest number is => ",largestArray([4,7,8,6,9,8,2,1]))

console.log("Largest number is => ",bigArr([4,7,8,6,9,8,2,1]))
