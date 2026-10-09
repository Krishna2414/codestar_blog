const editButtons = document.getElementsById("btn-edit");
const commentText = document.getElementsById("id_body");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");

const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

/**
 *
 * Initialize edit functionality for the provided edit buttons.
 *
 * For each edit button, an event listener is added that, when clicked, retrieves the comment ID and the corresponding comment text. The comment text is then populated into the comment form's textarea, and the form's action URL is updated to point to the edit endpoint for that specific comment. The submit button's text is also changed to indicate that the user is editing a comment.
 */

for (let button of editButtons) {
  button.addEventListener("click", (e) => {
    let commentId = e.target.getAttribute("comment_id");
    let commentContent = document.getElementById(
      `comment-${commentId}`,
    ).innerText;
    commentText.value = commentContent;
    submitButton.innerText = "Update";
    commentForm.setAttribute("action", `edit_comment/${commentId}/`);
  });
}

/**
 *
 * Initialize delete functionality for the provided delete buttons.
 *
 * For each delete button, an event listener is added that, when clicked, retrieves the comment ID and sets the delete confirmation button's href attribute to point to the delete endpoint for that specific comment. The delete modal is then displayed to confirm the deletion action.
 */

for (let button of deleteButtons) {
  button.addEventListener("click", (e) => {
    let commentId = e.target.getAttribute("comment_id");
    deleteConfirm.href = `delete_comment/${commentId}/`;
    deleteModal.show();
  });
}
