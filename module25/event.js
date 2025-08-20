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
// for letter
input.addEventListener("keydown", function keyDown(e) {
  console.log("key down", e);
});
// for word
input.addEventListener("keyup", function keyUp(e) {
  console.log("key up", e.target.value);
});
// delete
const deleteU = document.getElementById("delete-input");
deleteU.addEventListener("keyup", function deleteUser(e) {
  const text = e.target.value;
  const btnDelete = document.getElementById("delete-btn");
  if (text === "delete") {
    btnDelete.removeAttribute("disabled");
    const secretIfo = document.getElementById("secret-info");
    secretIfo.style.display = "none";
  } else {
    console.log("something else");
  }
});

// 25-7 (semi-advanced) Event bubble and Stop propagating
document.getElementById("item-2").addEventListener("click", function item2(e) {
  console.log("item 2 clicked");
  // e.stopPropagation();
  e.stopImmediatePropagation();
});
//
document.getElementById("ol-7").addEventListener("click", function item2() {
  console.log("ol section clicked");
});
//
document.getElementById("sec-7").addEventListener("click", function item2() {
  console.log("div section clicked");
});

// 25-8 (advanced) Event delegate and benefit of Event bubble

// const items = document.getElementsByClassName("item");

// for (const item of items) {

//   item.addEventListener("click", function (e) {
//     e.target.parentNode.removeChild(e.target);
//   });
// }

//remove item from parent
document.getElementById("sec-8").addEventListener("click", function (e) {
  e.target.parentNode.removeChild(e.target);
});

// add item ,
document.getElementById("add-item").addEventListener("click", function add(e) {
  const ol = document.getElementById("sec-8");

  const li = document.createElement("li");
  li.innerText = "new item";

  ol.appendChild(li);
});
