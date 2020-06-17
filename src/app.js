const container = document.querySelector(".container")
const posts = [
    { date: "3/1/2020", title: "Post 1", content: "Lorem ipsum" },
    { date: "4/1/2020", title: "Post 2", content: "Ipsum lorem" },
]

const showPosts = () => {
    let output = ""
    // todo: sort posts by date before  
    posts.forEach(({ title, content }) =>
        (output += `
    <div class="card">
        <h2 class="card--title">${title}</h1>
        <div class="card--content">${content}</div>
    </div>
    `))
    container.innerHTML = output
    console.log("posts shown")
}

/*
TODO
function sortPosts(posts) {
    posts.
    return sorted;
}*/

document.addEventListener("DOMContentLoaded", showPosts)
