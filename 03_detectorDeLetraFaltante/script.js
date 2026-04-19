const fearNotLetter = (string) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'

    for (let i = 0; i < alphabet.length; i++) {
        for (let j = 0; j < string.length; j++) {
            if (string[j] === alphabet[i] && string[j + 1] !== alphabet[i + 1]) {
                let letter = alphabet[i + 1]
                return letter
            }
        }
    }
}

console.log(fearNotLetter('abcdeghijklmnopqrstuvwxyz'))