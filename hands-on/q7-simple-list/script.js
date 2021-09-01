

let API_BASE_URL = "https://anapioficeandfire.com/api/books/"

// Part 1
/*
let btn = document.querySelector("#btn")
btn.addEventListener('click', async function() {
    let response = await axios.get(API_BASE_URL)
    let booksArray = response.data
    for (let i = 0; i < booksArray.length; i++) {
        let nameOfBook = booksArray[i].name
        let pagesOfBook = booksArray[i].numberOfPages

        let newElement = document.createElement("li")
        newElement.innerHTML = `Name: ${nameOfBook}, Pages: ${pagesOfBook}`

        document.querySelector("#list").appendChild(newElement)
    }
})

*/

// Challenge
let btn = document.querySelector("#btn")
btn.addEventListener('click', async function() {
    let response = await axios.get(API_BASE_URL)
    let booksArray = response.data // books are in an array

    // iterate through the array
    for (let i = 0; i < booksArray.length; i++) {
        // access each book's info -> object
        let bookInfo = booksArray[i]
        let nameOfBook = bookInfo.name
        let pagesOfBook = bookInfo.numberOfPages
        let povCharac = bookInfo.povCharacters // an object

        // create a new list to contain povCharac for each new book
        let newUl = document.createElement("ul")

        // povCharac gives a string
        for (let j = 0; j < povCharac.length; j++) {
            let newLi = document.createElement('li')

            newLi.innerHTML = povCharac[j]
            newUl.appendChild(newLi)
        }

        // putting everything together
        document.querySelector("#books").innerHTML += `
        <h1>Title: ${nameOfBook}</h1>
        <h3>Pages: ${pagesOfBook}<h3>
        ${newUl}

        `

    }
})




