const postId = window.location.pathname.split('/').pop();

// Fetch post data based on the ID
fetch(`https://blogapp-var8.onrender.com/api/blogs/${postId}`)
    .then(response => response.json())
    .then(postData => {
        // Update the HTML with the post content
        document.getElementById('postContent').innerHTML = `
        <h2>Date: ${postData.date.slice(0, 10)}</h2>
        <hr/>
        <h2 class="my-2">${postData.title}</h2>
        <p class="fs-5">${postData.content}</p>
         <b>By ${postData.author}</>
            
        `;
    })
    .catch(error => {
        console.error('Error fetching post data:', error);
    });