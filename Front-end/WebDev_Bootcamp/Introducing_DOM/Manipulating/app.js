const links = document.querySelectorAll('a');
for (let link of links) {
    link.innerText = "I am a link!!!";
    link.style.color = "rgb(50, 50, 200)";
}

// Doesn't work because innerText only modify text inside
// const h1 = document.querySelector('h1').innerText = '<i>askdjas</i>';

// Pour changer/ajouter un element html
// const h1 = document.querySelector('h1').innerHTML = '<i>iii</i>';
// const h1 = document.querySelector('h1').innerHTML += '<i>iii</i>';