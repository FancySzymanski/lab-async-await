function displayPosts(posts) {
    const ul = document.getElementById("post-list");

    posts.forEach(function (post) {
        const li = document.createElement("li");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
    
        h1.textContent = post.title;
        p.textContent = post.body;
    
        li.appendChild(h1)
        li.appendChild(p)
        ul.appendChild(li)
    });
}

async function fetchAndDisplayPosts() {
    try {
        const response = await 
        fetch('https://jsonplaceholder.typicode.com/posts');

        const posts = await response.json();

        displayPosts(posts)
    } catch (error) {
        const errorMessage = document.createElement("li")
        errorMessage.textContent = 'Failed to load posts, please try again later'
        document.getElementById("post-list").appendChild(errorMessage)
    }
}
fetchAndDisplayPosts();