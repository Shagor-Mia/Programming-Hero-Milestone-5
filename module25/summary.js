function addName() {
  const inputName = document.getElementById("input");

  const newName = document.getElementById("name-container");

  const newP = document.createElement("p");
  newP.innerText = inputName.value;

  newName.appendChild(newP);
  inputName.value = "";
}
//

document.getElementById("add2").addEventListener("click", function (e) {});
