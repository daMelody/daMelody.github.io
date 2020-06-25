const container = document.querySelector(".container")
const posts = [ //! these should be sorted by date
    { date: "4/1/2020", title: "Post 2", summary: "a summary about blog2" },
    { date: "3/1/2020", title: "Post 1", summary: "a summary about blog1" },
]

const showPosts = () => {
    let output = ""
    posts.forEach(({ date, title, summary }) =>
        (output += `
    <div class="card">
        <h2 class="card--title">${title}</h2>
        <p class="card--date">${date}</p>
        <p class="card--summary">${summary}</p>
    </div>
    `))
    container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showPosts)
