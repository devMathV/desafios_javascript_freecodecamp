let books = [
    {
        title: 'Livro 2',
        authorName: 'Ana Clara',
        releaseYear: 2009
    },
    {
        title: 'Livro 1',
        authorName: 'Matheus',
        releaseYear: 2007
    },
    {
        title: 'Livro 3',
        authorName: 'Madoca',
        releaseYear: 2023
    }
]

const sortByYear = (book1, book2) => {
    if (book1.releaseYear < book2.releaseYear) return -1
    if (book1.releaseYear > book2.releaseYear) return 1
    return 0
}

const filteredBooks = books
    .filter(b => b.releaseYear <= 2017)
filteredBooks.sort(sortByYear)

console.log(filteredBooks)