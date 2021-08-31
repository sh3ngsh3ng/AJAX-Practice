

document.querySelector("#load-image-btn").addEventListener('click', async function() {
    let artwork = await axios.get("artwork.json")
    document.querySelector("#artwork").innerHTML = `<h1>${artwork.data.title}</h1>
    <img src="${artwork.data.image_url}" class="image2"/>
    `
})




