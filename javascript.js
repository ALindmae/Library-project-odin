function BookConstructor (author, title, pages, read, genre) {
    if (!new.target) throw Error("Need to use new");
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.genre = genre;
    this.id = crypto.randomUUID();
}

let library = [];

function addBook (author, title, pages, read, genre) {
    let newbook = new BookConstructor(author, title, pages, read,genre);
    library.push(newbook);
}

addBook("Cal Newport", "Deep Work", 250, "Read", "Productivity");
addBook("Robert Greene", "Mastery", 350, "Not read", "Self-help" );