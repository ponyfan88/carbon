let mlaDate = document.getElementById("mla-date");

const date = new Date();

let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][date.getMonth()];

let day = date.getDate();

let year = date.getFullYear();

mlaDate.innerText = month + " " + day + ", " + year