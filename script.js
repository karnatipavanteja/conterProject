const dBtn = document.getElementById("dec");
const rBtn = document.getElementById("reset");
const iBtn = document.getElementById("increment");
const countLabel = document.getElementById("countLabel");
let count = 0;

iBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
    countLabel.style.color="red"
}

rBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
    countLabel.style.color="blue"
}

dBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}
