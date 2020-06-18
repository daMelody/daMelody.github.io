const container = document.querySelector(".container")
const posts = [
    { date: "3/1/2020", title: "Post 1", content: "../content/blog1.txt" },
    { date: "4/1/2020", title: "Post 2", content: "../content/blog2.txt" },
]

const showPosts = () => {
    let output = ""
    // todo: sort posts by date before  
    posts.forEach(({ title, content }) =>
        (output += `
    <div class="card">
        <h2 class="card--title">${title}</h1>
        <embed class="card--content" src="${content}">
    </div>
    `))
    container.innerHTML = output
}

/*
TODO
function sortPosts(posts) {
    posts.
    return sorted;
}*/

document.addEventListener("DOMContentLoaded", showPosts)
