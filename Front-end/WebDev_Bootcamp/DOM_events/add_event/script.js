/* **** By assisgning directly ****
const btn = document.querySelector('#v2');
btn.onclick = () => {
    console.log("You clicked med!");
    console.log("I hope it works!");
}

function scream() {
    console.log("HAAAAAAAAAAAAAA!!!!");
}
btn.onmouseenter = scream;
*/

/* **** ADDEVENT LISTENER ****
const btn3 = document.getElementById("v3");
btn3.addEventListener('mouseup', () => {
    console.log("addEventListener on this one");
});


function twist() {
    console.log("TWIST");
}
function shout() {
    console.log("SHOUT");
}
const tasButton = document.getElementById("tas");
tasButton.addEventListener('click', twist, {once: true});
tasButton.addEventListener('click', shout);
*/
