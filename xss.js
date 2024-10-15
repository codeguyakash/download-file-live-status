async function multiRequest(url) {
    try {
        const blob = await fetch(url)
        const data = await blob.json()
        console.log(data)

    } catch (error) {
        console.log(error);
    }
}

setInterval(() => {
    multiRequest("http://localhost:3000/")
}, 0)