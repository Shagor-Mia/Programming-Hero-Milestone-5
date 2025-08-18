// console.log(document);
const liCollection = document.getElementsByTagName("li");
// console.log(liCollection);
for (let li of liCollection) {
  //   console.log(li);
  //   console.log(li.innerText);
}
const h1Collection = document.getElementsByTagName("h1");
for (let h1 of h1Collection) {
  //   console.log(h1.innerHTML);
  //   console.log(h1.innerText);
}

const food = document.getElementById("food");
// console.log(food.innerText);

const list = document.getElementsByClassName("list");
// console.log(list);
for (const li of list) {
  //   console.log(li.innerText);
}

const select = document.querySelectorAll("#section1 .list");
// console.log(select);

const select2 = document.querySelector("#section1 .list");
// console.log(select2);
