const titleCase = (str) => {
    const words = str.toLowerCase().split(' ');
    let result = [];

    for (let word of words) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(' ');
};

console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))