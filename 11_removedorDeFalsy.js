const bouncer = (array) => {
    let newArray = []

    for (let item of array) {
        if (item) newArray.push(item)
    }

    return newArray
}

console.log(bouncer([null, NaN, 1, 2, undefined]))