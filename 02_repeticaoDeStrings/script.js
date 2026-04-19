const repeatStringNumTimes = (string, number) => {
    if (number < 1) {
        return ''
    }

    let repeatedString = []

    for (let i = 0; i < number; i++) {
        repeatedString.push(string)
    }

    repeatedString = repeatedString.join('')

    return repeatedString
}

console.log(repeatStringNumTimes('abc', -2))