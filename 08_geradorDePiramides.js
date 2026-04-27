const pyramid = (char, rows, inverted) => {
    let result = '\n';

    for (let i = 0; i < rows; i++) {
        const level = inverted ? rows - i - 1 : i;
        const spaces = ' '.repeat(rows - level - 1);
        const chars = char.repeat(level * 2 + 1);

        result += spaces + chars + '\n';
    }

    return result;
};

console.log(pyramid('p', 2, false))