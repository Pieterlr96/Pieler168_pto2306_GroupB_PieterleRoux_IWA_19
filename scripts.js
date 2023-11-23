import { BOOKS_PER_PAGE, authors, genres, books } from './data.js'

//range counter
const range = books.length
if (!books || !Array.isArray(books)) {
    throw new Error('Source required')
}
if (!range || range.length < 2) {
    throw new Error('Range must be an array with two numbers')
}let page = 1;

// Day night mode
const settings = document.querySelector('[data-header-settings]')
const settingsForm = document.querySelector('[data-settings-form]')
const settingsTheme = document.querySelector("[data-settings-theme]")
const settingsOverlay = document.querySelector("[data-settings-overlay]")
const settingsCancel = document.querySelector('[data-settings-cancel]')


const modes =  {
    day: ["255, 255, 255", "10, 10, 20"],
    night: ["10, 10, 20", "255, 255, 255"],
  }

  if (window.matchMedia) {
    // Set theme to 'day' for light preference
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      settingsTheme.value = "day"
    }
    // Set theme to 'night' for dark preference
     else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      settingsTheme.value = "night" 
    }
  } else {
    // Set a default theme ('day')
    settingsTheme.value = "day" 
  }
  
  //User selects day or night mode
    settingsForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const formSubmit = new FormData(event.target);
    const submit = Object.fromEntries(formSubmit);
  
    document.documentElement.style.setProperty(
      "--color-light",
      modes[submit.theme][0]
    )
    document.documentElement.style.setProperty(
      "--color-dark",
      modes[submit.theme][1]
    )
  
    settingsOverlay.close();
  })

  //Open settings Theme
  settings.addEventListener('click', function() {
    settingsTheme.focus();
    settingsOverlay.showModal();
  })

  //close settings
  settingsCancel.addEventListener('click', function() {
    settingsForm.close()
  });
  
// Consts For personal ease of use
const dataListItems = document.querySelector('[data-list-items]')
const dataSearchGenres = document.querySelector('[data-search-genres]')


//creates book display range
fragment = document.createDocumentFragment()

extracted.forEach(({ author: authorId, id, image, title }) => {
    const extractedList = document.createElement("button");
    extractedList.classList.add("preview");
    extractedList.setAttribute("data-preview", id);

    extractedList.innerHTML = `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[authorId]}</div>
        </div>
    `;

    fragment.appendChild(extractedList);
});
dataListItems.appendChild(fragment);

//Genres 
const genresFragment = document.createDocumentFragment()

//All Genres element
const allGenresOption = document.createElement('option')
allGenresOption.value = 'any'
allGenresOption.textContent = 'All Genres'
genresFragment.appendChild(allGenresOption)

// creates each genre option
genresData.forEach(({ id, name }) => {
    const genreOption = document.createElement('Genre')
    genreOption.value = id
    genreOption.textContent = name
    genresFragment.appendChild(genreOption);
  });

dataSearchGenres.appendChild(genres);

//Authors 
const authorsFragment = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authors.appendChild(element)

for ([id, names];Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authors.appendChild(element)
}
const dataSearchAuthors = document.querySelector('[data-search-authors]')
dataSearchAuthors.appendChild(authors)

data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
const v = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';
document.documentElement.style.setProperty('--color-dark', css[preferredColorScheme].dark);
document.documentElement.style.setProperty('--color-light', css[preferredColorScheme].light);

const dataListButton = document.getElementById('data-list-button')
dataListButton.textContent ( `Show more (${books.length - BOOKS_PER_PAGE})`);

dataListButton.disabled ( !(matches.length - [page * BOOKS_PER_PAGE] > 0));

dataListButton.innerHTML = /* html */`
    <span>Show more</span>,
    <span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>,
`

const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const datSearchCancel = document.querySelector('[data-search-cancel]')
datSearchCancel.addEventListener('click', function() { 
    if (dataSearchOverlay.getAttribute('data-search-overlay') === 'false') {
    // Perform actions if data-search-overlay.open is false
    console.log('Data search overlay is not open'); } 
    else {
        // Handle the case where data-search-overlay.open is not false
        console.log('Data search overlay is open');
        
        // Additional logic...
    }
});
const dataSettingsCancel = document.querySelector('[data-settings-cancel]')
dataSettingsCancel.addEventListener ('click', function() {  
    const settingsOverlay = document.querySelector('[data-settings-overlay]');
if (settingsOverlay) {
    settingsOverlay.open = false;}})

const dataSettingsForm = document.querySelector('[data-settings-form]')
const dataListClose = document.querySelector('[data-list-close]')
const dataListActive = document.querySelector('[data-list-active]')
dataSettingsForm.addEventListener('sumbit', function(eventSubmit) {
    eventSubmit.preventDefault()
    actions.settings.submit()});

dataListClose.addEventListener('click', function () { 
    if(dataListActive) 
    {dataListActive.open = false }
});

dataListButton.addEventListener('click', function() {
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page * BOOKS_PER_PAGE, (page + 1) * BOOKS_PER_PAGE))
    actions.list.updateRemaining()
    page = page + 1
});

data-header-search.addEventListener('click', function() {
    if(data-search-overlay.open === true );
    data-search-title.focus();
})

data-search-form.addEventListener('click', function(filters) {
    preventsDefault()
    const formData = new FormData(events.target)
    filters = Object.fromEntries(formData)
    result = []

    for (book; booksList; i++) {
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            genreMatch = filters.genre = 'any'
            for (genre; book.genres; i++) { if (singleGenre = filters.genre ){ genreMatch === true }}}
        }

        if (titleMatch && authorMatch && genreMatch) {
            result.push(book)
    }

    if (display.length < 1 ) {
        data-list-message.class.add('list__message_show')
    }
    else{ 
        data-list-message.class.remove('list__message_show')
    }})
    

    
dataListItems.innerHTML = '';

const fragment = document.createDocumentFragment()
 extracted = source.slice(range[0], range[1])

dataListItems.appendChild(fragment);

    for ({ author, image, title, id }; extracted; i++) {
        const { author: authorId, id, image, title } = props

        element = document.createElement('button')
        element.classList = 'preview'
        element.setAttribute('data-preview', id)

        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `

        fragment.appendChild(element)
    }
    
    dataListItems.appendChild(fragments)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    remaining === hasRemaining ? initial : 0
    dataListButton.disabled = initial > 0

   dataListButton.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `

    window.scrollTo({ top: 0, behavior: 'smooth' });
    dataSearchOverlay.open = false


data-settings-overlay.addEventListener('submit',function() {
    preventsDefault()
    const formData = new FormData(events.target)
    const result = Object.fromEntries(formData)
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    data-settings-overlay.open === false
},

data-list-items.addEventListener('click', function() {
    pathArray = Array.from(events.path || events.composedPath())
    active

    for (node; pathArray; i++) {
        pathArray = Array.from(events.path || events.composedPath())
        active;
    
        for (node; pathArray; i++) {
            if (active) break;
            const previewId = node?.dataset?.preview
        
            for (const singleBook of books) {
                if (singleBook.id === previewId) 
                active = singleBook
            } 
        }
        
        if (!active) return
        data-list-active.open === true
        data-list-blur + data-list-image === active.image
        data-list-title === active.title
        
        data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
        data-list-description === active.description
    }
}))
