let url = "https://randomuser.me/api/?results=10"

let btn = document.querySelector("#btn")

btn.addEventListener('click', async function() {
    let response = await axios.get(url)
    let usersArray = response.data.results // an array of the random 10 ppl

    // iterate through each array
    // each iteration should retrieve first name, last name, city and image
    // append it into #random-users

    for (let i = 0; i < usersArray.length; i++) {
        let firstName = usersArray[i].name.first
        let lastName = usersArray[i].name.last
        let locationCity = usersArray[i].location.city
        let imageMed = usersArray[i].picture.medium


        let newElement = document.createElement('div')
        newElement.innerHTML = `<div>
        <h1>Name: ${firstName} ${lastName}</h1>
        <h4>City: ${locationCity}</h4>
        <img src="${imageMed}"> </div>
        `
        document.querySelector("#random-users").append(newElement)
    }

})

