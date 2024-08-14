document.getElementById("post-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get post data
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  // Create post element
  const postElement = document.createElement("div");
  postElement.classList.add("post");

  // Add title
  const postTitle = document.createElement("h3");
  postTitle.textContent = title;
  postElement.appendChild(postTitle);

  // Add content
  const postContent = document.createElement("p");
  postContent.textContent = content;
  postElement.appendChild(postContent);

  // Comment section
  const commentSection = document.createElement("div");
  commentSection.classList.add("comment-section");

  const commentInput = document.createElement("input");
  commentInput.setAttribute("type", "text");
  commentInput.setAttribute("placeholder", "Add a comment...");
  commentSection.appendChild(commentInput);

  const commentButton = document.createElement("button");
  commentButton.textContent = "Comment";
  commentSection.appendChild(commentButton);

  const commentList = document.createElement("div");
  commentSection.appendChild(commentList);

  postElement.appendChild(commentSection);

  // Add post to list
  document.getElementById("post-list").appendChild(postElement);

  // Clear form
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  // Handle comment submission
  commentButton.addEventListener("click", function () {
    const commentText = commentInput.value;
    if (commentText.trim() !== "") {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comment");
      commentElement.textContent = commentText;
      commentList.appendChild(commentElement);
      commentInput.value = "";
    }
  });
});
