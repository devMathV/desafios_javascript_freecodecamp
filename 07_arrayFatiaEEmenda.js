const frankenSplice = (arr1, arr2, num) => {
    let finalArr = arr2.slice()
    let element

    for (let i = arr1.length - 1; i >= 0; i--) {
        element = arr1[i]
        finalArr.splice(num, 0, element)
    }

    return finalArr
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1))