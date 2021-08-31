
document.querySelector("#load-btn").addEventListener('click', async function() {
    // Method 1
    // let response = await axios.get("file1.txt")
    // let response2 = await axios.get("file2.txt")
    // document.querySelector("#content").value = response.data + response2.data

    // Method 2: to run in parallel. can use for bonus points
    let request1 = axios.get("file1.txt")
    let request2 = axios.get("file2.txt")

    let response1 = await request1
    let response2 = await request2

    document.querySelector("#content").value = response1.data + response2.data
})




