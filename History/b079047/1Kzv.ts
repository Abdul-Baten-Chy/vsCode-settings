type Book = {
    title: string;
    author: string;
    publishedYear: number;
}

const book: Book = {
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
};

function isRecentBook(obj: Book): boolean {
    const currentYear = new Date().getFullYear()
    const diffYear = currentYear - obj.publishedYear
    if (diffYear <= 5) {
        return true
    } else {
        return false
    }
}

console.log(isRecentBook(book));
