// Write the code such that when the `Load` button is clicked, the content of the file
// `contact.txt` is added into `div#content`

let btn = document.querySelector("#load-btn").addEventListener('click', async function() {
    let response = await axios.get('contact.txt') 
    let target = document.querySelector("#content")
    target.innerHTML = response.data
    // cannot use innerText as it is 'escapred' and stored as text. browser will not render them as HTML
})