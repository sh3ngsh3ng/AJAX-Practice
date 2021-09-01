


let API_BASE_URL = "https://openlibrary.org/search.json?title="

document.querySelector('#btn').addEventListener('click', async function() {
    let userInput = document.querySelector('#user-input').value
    let x = userInput.replace(/ /g, "+")
    
    let endpoint = API_BASE_URL + x
    let response = await axios.get(endpoint)

 
    let mainObj = response.data
    let docObj = mainObj.docs
    let bookList = docObj.docs // an array


    for (let i = 0; i < bookList.length; i++) {
        let eachBook = bookList[i]
        let title = eachBook.title
        let author = eachBook.author_name
        console.log(author)
        document.querySelector("#list").innerHTML += 
        `<li>Title: ${title}, Author: ${author}</li>`
    }
})



