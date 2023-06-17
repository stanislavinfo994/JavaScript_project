document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('input');
    const button = document.querySelector('button');
    const postBlock = document.querySelector('.post-block');
    const commentButton = document.querySelector('.comment-button');
    const commentBlock = document.querySelector('.comment-block');

    button.addEventListener('click', () => {
        const id = input.value;
        if (id >= 1 && id <= 100) {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(response => response.json())
                .then(post => {
                    postBlock.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          `;
                    commentButton.style.display = 'block';
                    commentButton.addEventListener('click', () => {
                        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
                            .then(response => response.json())
                            .then(comments => {
                                let commentsHTML = '';
                                comments.forEach(comment => {
                                    commentsHTML += `
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                  `;
                                });
                                commentBlock.innerHTML = commentsHTML;
                            })
                            .catch(error => console.error(error));
                    });
                })
                .catch(error => console.error(error));
        } else {
            alert('ID має бути від 1 до 100');
        }
    });
});