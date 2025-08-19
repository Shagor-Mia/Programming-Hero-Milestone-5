const sections = document.querySelectorAll("section");
// console.log(section);

// for (const section of sections) {
//   section.style.backgroundColor = "green";
//   section.style.borderRadius = "10px";
// }

for (const section of sections) {
  //   section.classList.add("section-card");
}

// create element
const newChild = document.createElement("li");

newChild.innerText = "new player";
const playerList = document.getElementById("player-list");
playerList.appendChild(newChild);
