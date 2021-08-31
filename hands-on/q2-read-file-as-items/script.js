// <!-- Create your own index.html and script.js for this hands-on. Include in axios.min.js yourself manually (google for 'axios cdn' to find the site to get axios from).

// Your goal: when the user clicks on a button, perform the following

// Read the content of items.txt and print it to the console,
// Add each fruit inside the file into an unordered list inside your index.html (that is, display each fruit as its own bullet point)
// Hint: Research the JavaScript 'string split' feature to help you. -->


let btn = document.querySelector("#add")

btn.addEventListener('click', async function() {
    let response = await axios.get('items.txt')
    // test whether can get back result (TDD) console.log(response.data)
    // response.data => "apples,bananas....."
    // convert the response.data string to an array
    let fruits = response.data.split(',')
    // output: add each fruit to the div
    for (let currentFruit of fruits) {
        // using innerHTML:
        list.innerHTML += `<li>${currentFruit}</li>`
    }


    /* using appendChild:
    let liElement = document.createElement('li')
    liElement.innerHTML = currentFruit
    list.appendChild(liElement)
    */
})









