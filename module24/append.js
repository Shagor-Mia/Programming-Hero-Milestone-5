// parent node
const mainContainer = document.getElementById("main-container");

// create child node
const placeSection = document.createElement("section");

// create element
const h1 = document.createElement("h1");
h1.innerText = " people from gallery";
placeSection.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "rahim";
ul.appendChild(li1);
placeSection.appendChild(ul);

// append section
mainContainer.appendChild(placeSection);
console.log(mainContainer);

// easier to create html
const bookSection = document.createElement("section");
bookSection.innerHTML = `
<h1>book i love</h1>
<ul>
<li>bangla</>
<li>english</>
<li>math</>
</ul>
`;
mainContainer.appendChild(bookSection);
