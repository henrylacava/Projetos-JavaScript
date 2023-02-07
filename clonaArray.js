const arrayNum = [1,2,3,4]

function clonaArray(element){
    const arrayClone = []
    if (typeof element === 'object'){
        arrayClone.push(element)
    }
    return arrayClone
}

const arrayNumCopy = arrayNum

console.log(arrayNum === arrayNumCopy) //true
console.log(arrayNum === clonaArray(arrayNum)) //false