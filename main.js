let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
});

let posts = [];
let currentPost = 0;

function renderPost(index) {
    const card = document.querySelector("#site-main .card");
    card.querySelector("h2").textContent = posts[index].title;
    card.querySelector("p").innerHTML = marked.parse(posts[index].content);
    card.querySelector(".text-secondary").textContent = posts[index].date;
}

function setupNavigation() {
    document.getElementById("prev-post").addEventListener("click", () => {
        if (currentPost > 0) {
            currentPost--;
            renderPost(currentPost);
        }
    });

    document.getElementById("next-post").addEventListener("click", () => {
        if (currentPost < posts.length - 1) {
            currentPost++;
            renderPost(currentPost);
        }
    });
}

// Fetch posts from JSON file
fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        posts = data;
        currentPost = posts.length - 1;
        renderPost(currentPost);
        setupNavigation();
    })
    .catch(error => {
        console.error('Error loading posts:', error);
    });