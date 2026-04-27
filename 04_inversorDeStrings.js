const reverseString = (string) => {
    string = string.split('').reverse().join('')

    return string
}

console.log(reverseString('teste'))