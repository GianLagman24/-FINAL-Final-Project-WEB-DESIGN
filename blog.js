function createBlogPost() {
    var title = document.getElementById('blog-title').value;
    var content = document.getElementById('blog-content').value;
    var currentDate = new Date().toLocaleDateString();

    var postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');

    var datePosted = document.createElement('p');
    datePosted.classList.add('date-posted');
    datePosted.textContent = currentDate;
    postDiv.appendChild(datePosted);

    var titleElement = document.createElement('h2');
    titleElement.textContent = title;
    postDiv.appendChild(titleElement);

    var contentParagraph = document.createElement('p');
    contentParagraph.textContent = content;
    postDiv.appendChild(contentParagraph);

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
        postDiv.remove();
    });
    postDiv.appendChild(deleteButton);

    var mainContent = document.getElementById('maincontent');
    mainContent.appendChild(postDiv);

    document.getElementById('blog-title').value = '';
    document.getElementById('blog-content').value = '';
}
