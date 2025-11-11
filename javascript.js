// ====== ICON DEFINITIONS ====== //
const genreIcons = {
    "no-genre": '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M300-80q-58 0-99-41t-41-99v-520q0-58 41-99t99-41h500v600q-25 0-42.5 17.5T740-220q0 25 17.5 42.5T800-160v80H300Zm-60-267q14-7 29-10t31-3h20v-440h-20q-25 0-42.5 17.5T240-740v393Zm160-13h320v-440H400v440Zm-160 13v-453 453Zm60 187h373q-6-14-9.5-28.5T660-220q0-16 3-31t10-29H300q-26 0-43 17.5T240-220q0 26 17 43t43 17Z"/></svg>',

    fantasy: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"/></svg>',

    "science-fiction": '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/></svg>',

    horror: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80v-170q-39-17-68.5-45.5t-50-64.5q-20.5-36-31-77T80-520q0-158 112-259t288-101q176 0 288 101t112 259q0 42-10.5 83t-31 77q-20.5 36-50 64.5T720-250v170H240Zm80-80h40v-80h80v80h80v-80h80v80h40v-142q38-9 67.5-30t50-50q20.5-29 31.5-64t11-74q0-125-88.5-202.5T480-800q-143 0-231.5 77.5T160-520q0 39 11 74t31.5 64q20.5 29 50.5 50t67 30v142Zm100-200h120l-60-120-60 120Zm-80-80q33 0 56.5-23.5T420-520q0-33-23.5-56.5T340-600q-33 0-56.5 23.5T260-520q0 33 23.5 56.5T340-440Zm280 0q33 0 56.5-23.5T700-520q0-33-23.5-56.5T620-600q-33 0-56.5 23.5T540-520q0 33 23.5 56.5T620-440ZM480-160Z"/></svg>',

    romance: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M454-280h52q108 0 176.5-47T805-452q-60 18-146 35t-179 17q-93 0-178.5-17.5T156-452q54 78 122 125t176 47Zm0 80q-147 0-262-89T40-520l202-202q17-17 38.5-27.5T326-760q18 0 35.5 6.5T394-737l86 57 86-57q15-10 32.5-16.5T634-760q24 0 45.5 10.5T718-722l202 202q-37 142-152 231t-262 89h-52Zm27-280q91 0 174.5-18T795-533L662-666q-6-6-13.5-9t-15.5-3q-6 0-11.5 1.5T611-671l-131 87-130-87q-5-4-10.5-5.5T328-678q-8 0-15.5 3t-13.5 9L167-533q55 17 139 35t175 18Z"/></svg>',

    biography: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-240q-56 0-107 17.5T280-170v10h400v-10q-42-35-93-52.5T480-240Zm0-80q69 0 129 21t111 59v-560H240v560q51-38 111-59t129-21Zm0-160q-25 0-42.5-17.5T420-540q0-25 17.5-42.5T480-600q25 0 42.5 17.5T540-540q0 25-17.5 42.5T480-480ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h480q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm240-320q58 0 99-41t41-99q0-58-41-99t-99-41q-58 0-99 41t-41 99q0 58 41 99t99 41Zm0-140Z"/></svg>',

    "self-help": `<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80q-26 0-47-12.5T400-126q-33 0-56.5-23.5T320-206v-142q-59-39-94.5-103T190-590q0-121 84.5-205.5T480-880q121 0 205.5 84.5T770-590q0 77-35.5 140T640-348v142q0 33-23.5 56.5T560-126q-12 21-33 33.5T480-80Zm-80-126h160v-36H400v36Zm0-76h160v-38H400v38Zm-8-118h58v-108l-88-88 42-42 76 76 76-76 42 42-88 88v108h58q54-26 88-76.5T690-590q0-88-61-149t-149-61q-88 0-149 61t-61 149q0 63 34 113.5t88 76.5Zm88-162Zm0-38Z"/></svg>`,

    science: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M449-539q21 0 35.5-14.5T499-589q0-21-14.5-35.5T449-639q-21 0-35.5 14.5T399-589q0 21 14.5 35.5T449-539ZM822-80q-42 0-113-35t-152-95q-19 5-38.5 7.5T479-200q-117 0-198-81t-81-198q0-20 3-40t8-39q-59-81-94.5-151.5T81-822q0-27 15-42.5t41-15.5q26 0 67.5 18T319-801q-21 11-39 23t-35 26q-19-11-37-19t-38-17q18 38 38.5 74t43.5 71q38-54 97-85t130-31q117 0 198.5 81.5T759-479q0 71-31.5 130T642-252q35 23 71.5 44t74.5 38q-8-19-16.5-37T752-244q15-17 27-36t22-39q46 78 62.5 116.5T880-138q0 29-16 43.5T822-80ZM549-359q17 0 28.5-11.5T589-399q0-17-11.5-28.5T549-439q-17 0-28.5 11.5T509-399q0 17 11.5 28.5T549-359Zm50-140q13 0 21.5-8.5T629-529q0-13-8.5-21.5T599-559q-13 0-21.5 8.5T569-529q0 13 8.5 21.5T599-499ZM468-281q-51-44-98-91t-90-98q2 38 17 71.5t41 59.5q26 26 59 41t71 17Zm103-21q48-25 78-72.5T679-480q0-83-58.5-141T479-679q-58 0-105 30t-72 78q57 76 125 144t144 125Zm-197-73Zm117-116Z"/></svg>',

    business: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z"/></svg>',

    philosophy: `<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l52 205q5 19-7 34.5T840-360h-80v120q0 33-23.5 56.5T680-160h-80v80h-80v-160h160v-200h108l-38-155q-23-91-98-148t-172-57q-116 0-198 81t-82 197q0 60 24.5 114t69.5 96l26 24v208h-80Zm254-360Zm-54 80h80l6-50q8-3 14.5-7t11.5-9l46 20 40-68-40-30q2-8 2-16t-2-16l40-30-40-68-46 20q-5-5-11.5-9t-14.5-7l-6-50h-80l-6 50q-8 3-14.5 7t-11.5 9l-46-20-40 68 40 30q-2 8-2 16t2 16l-40 30 40 68 46-20q5 5 11.5 9t14.5 7l6 50Zm40-100q-25 0-42.5-17.5T420-520q0-25 17.5-42.5T480-580q25 0 42.5 17.5T540-520q0 25-17.5 42.5T480-460Z"/></svg>`,

    cooking: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-400h80v-200h-80v200Zm-160-60q-46-23-73-66.5T100-621q0-75 51.5-127T278-800q12 0 24.5 2t24.5 5q25-41 65-64t88-23q48 0 88 23t65 64q12-3 24-5t25-2q75 0 126.5 52T860-621q0 51-27 94.5T760-460v220H200v-220Zm320 60h80v-200h-80v200Zm-240 80h400v-189l44-22q26-13 41-36.5t15-52.5q0-42-28.5-71T682-720q-11 0-20 2t-19 5l-47 13-31-52q-14-23-36.5-35.5T480-800q-26 0-48.5 12.5T395-752l-31 52-48-13q-10-2-19.5-4.5T277-720q-41 0-69 29t-28 71q0 29 15 52.5t41 36.5l44 22v189Zm-80 80h80v80h400v-80h80v160H200v-160Zm280-80Z"/></svg>',

    childrens: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-240q-60 0-108.5-33T300-360h360q-23 54-71.5 87T480-240ZM380-420q-21 0-35.5-14.5T330-470q0-21 14.5-35.5T380-520q21 0 35.5 14.5T430-470q0 21-14.5 35.5T380-420Zm200 0q-21 0-35.5-14.5T530-470q0-21 14.5-35.5T580-520q21 0 35.5 14.5T630-470q0 21-14.5 35.5T580-420ZM480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-32 5-62t16-59l80 14q-11 25-16 51.5t-5 55.5q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-16-2-31.5t-5-30.5q-81-9-150-48T485-651l70-41q32 37 72.5 63t88.5 39q-25-39-61.5-68.5T573-704l84-50q83 47 133 129.5T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80ZM200-615l413-155q-32-26-70-39.5T463-823q-95 0-169.5 57.5T200-615Zm-64 110q-7-20-11.5-41t-4.5-43q0-91 51-163t129-112q-2-4-2.5-7.5t-.5-8.5q0-17 11.5-28.5T337-920q14 0 24 8t14 20q22-5 43.5-8t44.5-3q67 0 127.5 26T697-802l122-46 28 75-711 268Zm271-188Z"/></svg>',

    "health-fitness": '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M300-840q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 5-.5 10t-.5 10h-80q1-5 1-10v-10q0-60-40-100t-100-40q-47 0-87 26.5T518-666h-76q-15-41-55-67.5T300-760q-60 0-100 40t-40 100v10q0 5 1 10H81q0-5-.5-10t-.5-10q0-94 63-157t157-63Zm-88 480h112q32 31 70 67t86 79q48-43 86-79t70-67h113q-38 42-90 91T538-158l-58 52-58-52q-69-62-120.5-111T212-360Zm230 40q13 0 22.5-7.5T478-347l54-163 35 52q5 8 14 13t19 5h320v-80H623l-69-102q-6-9-15.5-13.5T518-640q-13 0-22.5 7.5T482-613l-54 162-34-51q-5-8-14-13t-19-5H40v80h297l69 102q6 9 15.5 13.5T442-320Zm38-167Z"/></svg>',

    "art-design": '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 32.5-156t88-127Q256-817 330-848.5T488-880q80 0 151 27.5t124.5 76q53.5 48.5 85 115T880-518q0 115-70 176.5T640-280h-74q-9 0-12.5 5t-3.5 11q0 12 15 34.5t15 51.5q0 50-27.5 74T480-80Zm0-400Zm-220 40q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120-160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm200 0q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm120 160q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17ZM480-160q9 0 14.5-5t5.5-13q0-14-15-33t-15-57q0-42 29-67t71-25h70q66 0 113-38.5T800-518q0-121-92.5-201.5T488-800q-136 0-232 93t-96 227q0 133 93.5 226.5T480-160Z"/></svg>',

    religion: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M620-320v-109l-45-81q-7 5-11 13t-4 17v229L663-80h-93l-90-148v-252q0-31 15-57t41-43l-56-99q-20-38-17.5-80.5T495-832l68-68 276 324 41 496h-80l-39-464-203-238-6 6q-10 10-11.5 23t4.5 25l155 278v130h-80Zm-360 0v-130l155-278q6-12 4.5-25T408-776l-6-6-203 238-39 464H80l41-496 276-324 68 68q30 30 32.5 72.5T480-679l-56 99q26 17 41 43t15 57v252L390-80h-93l103-171v-229q0-9-4-17t-11-13l-45 81v109h-80Z"/></svg>',

    poetry: '<svg class="genre icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M320-160q-33 0-56.5-23.5T240-240v-120h120v-90q-35-2-66.5-15.5T236-506v-44h-46L60-680q36-46 89-65t107-19q27 0 52.5 4t51.5 15v-55h480v520q0 50-35 85t-85 35H320Zm120-200h240v80q0 17 11.5 28.5T720-240q17 0 28.5-11.5T760-280v-440H440v24l240 240v56h-56L510-514l-8 8q-14 14-29.5 25T440-464v104ZM224-630h92v86q12 8 25 11t27 3q23 0 41.5-7t36.5-25l8-8-56-56q-29-29-65-43.5T256-684q-20 0-38 3t-36 9l42 42Zm376 350H320v40h286q-3-9-4.5-19t-1.5-21Zm-280 40v-40 40Z"/></svg>',
};

const readStateIcons = {
    read: 'task_alt',
    unread: 'circle'
};

// ====== DOM ELEMENT REFERENCES ====== //
const cardsContainer = document.querySelector('.main-content');
const addBookBtn = document.querySelector('.add-book-button');
const addBookBtnSmall = document.querySelector('.add-book-button-small');
const searchInput = document.querySelector('.search-input');
const searchSuggestionsContainer = document.querySelector('.searchSuggestionsContainer');
const searchBtn = document.querySelector('.search-button');

// ====== GLOBAL VARIABLES ====== //
const library = [];

// ====== CONSTRUCTORS AND DATA LOGIC ====== //
function Book (author, title, pages, read, genre, id) {
    if (!new.target) throw Error("Need to use new");
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
    this.genre = genre;
    this.id = id;
};

function addBook (author, title, pages, read, genre, id) {
    let newBook = new Book(author, title, pages, read ,genre, id);
    library.push(newBook);

    return newBook;
}

// ====== FUNCTION DEFINITIONS ====== //
function handleBookInput(id) {
    let title = document.querySelector(`.card[data-id="${id}"] .book-title-input`).value; 
    let author = document.querySelector(`.card[data-id="${id}"] .book-author-input`).value;
    let genre = document.querySelector(`.card[data-id="${id}"] .book-genre-selection`).value;
    let pages = document.querySelector(`.card[data-id="${id}"] .book-pages-input`).value; 
    let read = document.querySelector(`.card[data-id="${id}"]`).dataset.read;

    return addBook(author, title, pages, read, genre, id);
}

function createBookCard (book) {
    let genreIcon = genreIcons[book.genre];
    let card = document.createElement('div');

    card.classList.add('card');
    card.classList.add(book.genre);
    card.dataset.genre = book.genre;
    card.dataset.id = book.id;
    card.dataset.read = book.read;

    card.innerHTML =`
                    <div class="card-controls">
                        <button class="delete-book-button">
                            <svg xmlns="http://www.w3.org/2000/svg" class="delete-icon" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </button>
                        <button class="read-state-button">
                            <span class="material-symbols-outlined read-state-icon">${readStateIcons[book.read]}</span> 
                            <span class="read-state-text"> Read </span>
                        </button>
                    </div>
                    <div class="card-content">
                        ${genreIcon}
                        <div class="card-info">
                            <div>
                                <p class="book-title" lang="en"> ${book.title} </p>
                                <p class="book-author"> <span>By</span> ${book.author} </p>
                            </div>
                            <div class="book-info">
                                <p class="book-genre"> ${book.genre} </p>
                                <p class="book-pages"> ${book.pages} <span>pages</span></p>
                            </div>
                        </div>
                    </div>
            `
        return card;
}

function displayLibrary(library) {
    cardsContainer.innerHTML = "";
    
    for (let i = library.length - 1; i >= 0; i--) {
        let newBook = createBookCard(library[i]);
        cardsContainer.appendChild(newBook);
    };
};

function createBookCardForm () {
    const card = document.createElement('div');
    card.classList.add('card');
    card.classList.add('no-genre');
    card.dataset.id = crypto.randomUUID();
    card.dataset.read = 'unread';
    
    card.innerHTML =
            `
            <div class="card-controls">
                <button class="delete-book-button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="delete-icon" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </button>
                <button class="read-state-button">
                    <span class="material-symbols-outlined read-state-icon">${readStateIcons.unread}</span>
                    <span class="read-state-text"> Read</span>
                </button>
            </div>
            <form action="">
                <div class="card-content">
                    <div class="genre-container">
                        ${genreIcons["no-genre"]}
                        <button class="create-book-button" data-id="${card.dataset.id}" type="submit"> Create </button>
                    </div>
                    <div class="card-info">
                        <div>
                            <label for="book-title-input"> Book title </label>
                            <textarea class="book-title-input" id="book-title-input" type="text" autofocus></textarea>
                            <label for=""book-author-input""> Book author </label>
                            <textarea class="book-author-input" id=""book-author-input"" type="text"></textarea>
                        </div>
                        <div class="book-info">
                    <select name="book-genre-selection" class="book-genre-selection">
                        <option value="no-genre" selected>Choose a genre</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="biography">Biography</option>
                        <option value="self-help">Self-Help</option>
                        <option value="science">Science</option>
                        <option value="business">Business </option>
                        <option value="philosophy">Philosophy</option>
                        <option value="cooking">Cooking</option>
                        <option value="childrens">Children´s Book</option>
                        <option value="health-fitness">Health & Fitness</option>
                        <option value="art-design">Art / Design</option>
                        <option value="religion">Religion</option>
                        <option value="poetry">Poetry</option>
                    </select>
                            <input type="number" class="book-pages-input"> <span>pages</span>
                        </div>
                    </div>
                </div>
            </form>
            `
    return card;
};

function handleBookCardForm() {
    const card = createBookCardForm();
    cardsContainer.prepend(card);

    /* Genre selection card display */
    let genreSelection = card.querySelector('.book-genre-selection');

    genreSelection.addEventListener('change', (event) => {
        let card = event.target.closest('.card');
        let genreIcon = card.querySelector('.genre.icon');

        genreIcon.outerHTML = genreIcons[event.target.value];

        if (card.classList.length > 1) {
            let oldClass = card.classList[1];
            card.classList.replace(oldClass, event.target.value);
        }
        else {
            card.classList.add(event.target.value);
        }
    });

    // Create the book
    let createBookBtn = card.querySelector('.create-book-button');

    createBookBtn.addEventListener('click', (event) => {
        event.preventDefault();

        let id = event.target.dataset.id;

        let newBook = handleBookInput(id);
        let newBookCard = createBookCard(newBook);
        cardsContainer.prepend(newBookCard);

        card.remove();
    });
};

function toggleReadState(card) {
    const btnIcon = card.querySelector(".read-state-icon");
    
    if (!card) return;

    const newState = card.dataset.read === 'read' ? 'unread' : 'read';
    card.dataset.read = newState;
    btnIcon.innerHTML = readStateIcons[newState];

    if (card.dataset.id) {
        const book = library.find(book => book.id === card.dataset.id);
        if (book) book.read = newState;
    }
};

 function deleteCard(card) {
    let cardId = card.dataset.id;
    let index = library.findIndex(book => book.id === cardId);
    library.splice(index, 1);
    card.remove();
 };

 function displaySearchSuggestions(suggestions, value) {

    searchSuggestionsContainer.innerHTML = '';
    searchSuggestionsContainer.classList.add('active');

    for (let i = 0; i < suggestions.length; i++) {
        if (i == 13) break;
        let suggestionElement = document.createElement('li');
        let index = suggestions[i].toLowerCase().indexOf(value);
        let matchCut = suggestions[i].slice(index, (index + value.length));
        let matchCutElement = suggestions[i].replace(matchCut, `<span>${matchCut}</span>`);
        suggestionElement.innerHTML = matchCutElement;
        searchSuggestionsContainer.appendChild(suggestionElement);
    }
 };


// ====== INITIALIZATION ====== //
 displayLibrary(library);


// ====== EVENT LISTENERS ====== //
addBookBtnSmall.addEventListener('click', handleBookCardForm);
addBookBtn.addEventListener('click', handleBookCardForm);

cardsContainer.addEventListener('click', (event) => { 
    
    const card = event.target.closest(".card");
    if (!card) return;

    const deleteButton = event.target.closest('.delete-book-button, .delete-icon');
    const readButton = event.target.closest('.read-state-text, .read-state-button, .read-state-icon');

    if (readButton) {
        toggleReadState(card);
    }

    else if (deleteButton) {
        deleteCard(card);
    }

 });

searchSuggestionsContainer.addEventListener('click', (event) => {

    let selection = event.target.closest('li').innerHTML;
    const regex = /<\/?span>/gi;
    selection = selection.replace(regex, "");
    searchInput.value = selection;
    searchInput.dispatchEvent(new Event('input'));
    searchSuggestionsContainer.classList.remove('active');

});

searchInput.addEventListener('input', (event) => {

    let value = searchInput.value.toLowerCase();

    if (!value) {
        searchSuggestionsContainer.classList.remove('active');
        searchSuggestionsContainer.innerHTML = '';
        displayLibrary(library);
        return;
    }
            
    let regex = new RegExp(value, "i");
    const matchedBooks = library.filter((book) => regex.test(book.title));

    if (matchedBooks.length > 0) {
        const matchedTitlesSet = new Set(matchedBooks.map((book) => book.title));
        const matchedTitles = [];
        matchedTitlesSet.forEach((title) => matchedTitles.push(title));

        displayLibrary(matchedBooks);
        displaySearchSuggestions(matchedTitles, value);
    }
    else {
        searchSuggestionsContainer.classList.remove('active');
        searchSuggestionsContainer.innerHTML = '';
    }

 });

searchBtn.addEventListener('click', (event) => {

    event.preventDefault();    
    searchInput.dispatchEvent(new Event('input'));
    searchSuggestionsContainer.classList.remove('active');

});