function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
//
const btnBlue = document.getElementById("blue");
btnBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};
//
const btnGreen = document.getElementById("green");
function makeGreen() {
  document.body.style.backgroundColor = "green";
}
btnGreen.onclick = makeGreen;
//
const orange = document.getElementById("orange");
orange.addEventListener("click", function makeOrange() {
  document.body.style.backgroundColor = "orange";
});
//
const btnTitle = document.getElementById("btn-title");
btnTitle.addEventListener("click", function changeTitle() {
  const title = document.getElementById("title");

  title.innerText = "updated title";
});
//
const update = document.getElementById("update");
update.addEventListener("click", function update() {
  const name = document.getElementById("name");
  const para = document.getElementById("para");
  para.innerText = name.value;
});

// <!-- 25-5 Create a comment box and display comment -->

const post = document.getElementById("post");
post.addEventListener("click", function Post(event) {
  event.preventDefault();
  //
  const text = document.getElementById("text-area");
  console.log(text);
  //
  const commentContainer = document.getElementById("comment-container");

  // create element
  const elementP = document.createElement("p");
  //
  elementP.classList.add("comment");
  //
  elementP.innerText = text.value;
  //
  commentContainer.appendChild(elementP);

  //clean text area
  text.value = "";
});

// <!-- 25-6 Explore more event type and Simple github like delete confirmation button -->
const mouseE = document.getElementById("mouse");
mouseE.addEventListener("mouseenter", function mouseEnter() {
  console.log("mouse get");
});
//
const input = document.getElementById("user-input");
input.addEventListener("focus", function userEnter() {
  console.log("user get focused");
});

input.addEventListener("blur", function userEnterOut() {
  console.log("user get out");
});
input.addEventListener("keydown", function keyDown(e) {
  console.log("key down", e);
});
input.addEventListener("keyup", function keyUp(e) {
  console.log("key up", e);
});
