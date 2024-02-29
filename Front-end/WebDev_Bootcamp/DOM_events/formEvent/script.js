const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#list")

form.addEventListener("submit", function(e) {
    const newLi = document.createElement("li");
    const catName = input.value;
    e.preventDefault();

    newLi.innerText = catName;
    list.append(newLi);
    console.log(newLi);
})