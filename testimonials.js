function createBlogPost() {
    var title = document.getElementById('blog-title').value;
    var content = document.getElementById('blog-content').value;
    var rating = document.querySelector('input[name="rating"]:checked').value;
    
    var blogSection = document.getElementById('maincontent');

    var newPost = document.createElement('div');
    newPost.classList.add('blog-post');

    newPost.innerHTML = `
        <h2>${title}</h2>
        <p>${content}</p>
        <p>Rating: ${getStars(rating)}</p>
        <button onclick="deleteBlogPost(this)">Delete</button>
    `;
    
    blogSection.appendChild(newPost);

    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
    document.querySelector('input[name="rating"]:checked').checked = false;
}

function getStars(rating) {
    var stars = '';
    for (var i = 0; i < rating; i++) {
        stars += '★';
    }
    for (var i = rating; i < 5; i++) {
        stars += '☆';
    }
    return stars;
}

function deleteBlogPost(button) {
    var post = button.parentElement;
    post.remove();
}
