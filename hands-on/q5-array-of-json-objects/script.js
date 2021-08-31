
document.querySelector("#load-users-btn").addEventListener('click', async function() {
    let response = await axios.get("users.json")
    let responseData = response.data
    for (let i = 0; i < responseData.users.length; i++) {
        document.querySelector("#user-list").innerHTML += `
            <li>First Name: ${responseData.users[i].firstName}, 
            Last Name: ${responseData.users[i].lastName}, 
            Email: ${responseData.users[i].emailAddress}</li> `
    }
})

document.querySelector("#searchbutton").addEventListener('click', async function() {
    let response = await axios.get("users.json")
    let responseData = response.data
    let userId = document.querySelector("#user-input").value
    for (let i = 0; i < responseData.users.length; i++) {
        if (userId.toLowerCase() === responseData.users[i].firstName) {
            document.querySelector("#display").innerHTML = 
            `${responseData.users[i].firstName.toUpperCase()} ${responseData.users[i].lastName.toUpperCase()}`
        } 
    }
})

