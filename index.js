// console.log("hello world");

let message = document.querySelector("#message");
document.querySelector("form").addEventListener("submit", addMovie);

function deleteMovie(event) {
  event.target.parentNode.remove();
  message.textContent = `${event.target.parentNode.firstChild.textContent} has been deleted!`;
  revealMessage();
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked") === true) {
    message.textContent = `${event.target.textContent} is done`;
  } else {
    message.textContent = `${event.target.textContent} is back`;
  }
  revealMessage();
}

function addMovie(event) {
  event.preventDefault();
  const inputField = document.querySelector("input");

  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");
  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  const list = document.querySelector("ul");
  list.appendChild(movie);
  // inputField.value = "";
}
function callBack(event) {
  message.classList.add("hide");
}
function revealMessage() {
  message.classList.remove("hide");
  setTimeout(callBack, 1000);
}

