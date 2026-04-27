const findElement = (arg, func) => {
    let funcao = func
    for (let i = 0; i < arg.length; i++) {
        if (funcao(arg[i])) {
            return arg[i]
        }
    }
}

console.log(findElement(["hello", "world", "javascript"], function (str) { return str.length > 5; }))