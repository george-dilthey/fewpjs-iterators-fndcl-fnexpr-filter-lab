// Code your solution here
function findMatching(arr, str){
    return arr.filter(v => v.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str){
    return arr.filter(d => d.substring(0, str.length) === str)
}

function matchName(arr, str){
    return arr.filter(d => d.name === str)
}