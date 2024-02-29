// Select by ID
const banner = document.getElementById('banner');
console.dir(banner);

// Select by element name
const allImages = document.getElementsByTagName('img');
for (let image of allImages) {
    image.src = "https://plus.unsplash.com/premium_photo-1664304632982-0c1ce07a9f2a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}

// Select by classes
const squareClass = document.getElementsByClassName("square");
for(square in squareClass) {
    square.src = "https://plus.unsplash.com/premium_photo-1664304632982-0c1ce07a9f2a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
}

// Select by CSS SELECTORS
// return first match
const secondImg = document.querySelector('img:nth-of-type(2)');
const java_anchor = document.querySelector('a[title="Java"]');
// return all matchs (collection)
const links = document.querySelectorAll("p a");
for (let link of links) {
    console.log(link.href);
}