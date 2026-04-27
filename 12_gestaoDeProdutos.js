let inventory = []

const findProductIndex = (productName) => {
    return inventory.findIndex(i => i.name === productName.toLowerCase())
}

const addProduct = (product) => {
    product.name = product.name.toLowerCase()
    const index = findProductIndex(product.name)

    if (index === -1) {
        inventory.push(product)
        return console.log(`${product.name} added to inventory`)
    }

    inventory[index].quantity += product.quantity
    return console.log(`${product.name} quantity updated`)
}

const removeProduct = (productName, productQuantity) => {
    productName = productName.toLowerCase()
    const index = findProductIndex(productName)
    if (index === -1) {
        return console.log(`${productName} not found`)
    }

    let quantityLeft = inventory[index].quantity - productQuantity

    if (quantityLeft > 0) {
        inventory[index].quantity -= productQuantity
        return console.log(`Remaining ${productName} pieces: ${inventory[index].quantity}`)
    }
    else if (quantityLeft === 0) {
        inventory.splice(index, 1)
        return
    }
    return console.log(`Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`)
}