const diffArray = (arr1, arr2) => {
    let concatArray = arr1.concat(arr2)

    let finalArray = concatArray.filter(e => {
        return !(arr1.includes(e) && arr2.includes(e))
    })

    return finalArray
}

console.log(diffArray(["diorito", "andesito", "grama", "terra", "lã rosa", "arbusto morto"], ["diorito", "andesito", "grama", "terra", "arbusto morto"]))