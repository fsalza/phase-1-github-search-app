const form = document.getElementById("github-form")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const search = document.getElementById("search").value

    const originalName = search.split(' ').join('')

    document.getElementById("result").innerHTML = ""

    fetch("https://api.github.com/users/"+originalName)
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)

        document.getElementById("result").innerHTML = `
           <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
        `
    })
})