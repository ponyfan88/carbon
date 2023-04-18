let expandFolderViewButton = document.getElementById("expandFolderViewButton");
let folderView = document.getElementById("folderView");

let folderViewExpanded = false;

expandFolderViewButton.addEventListener("click", function () {
    folderViewExpanded = !folderViewExpanded;

    if (folderViewExpanded) {
        expandFolderViewButton.style.left = "35vh";
        folderView.style.width = "35vh";

        expandFolderViewButton.innerText = "<<";

        document.getElementsByClassName("dino")[0].src = "assets/pages/default/dinosaur/dinosaur" + (Math.floor(Math.random() * 11) + 1) + ".gif";
    } else {
        expandFolderViewButton.style.left = "0vw";
        folderView.style.width = "0vw";

        expandFolderViewButton.innerText = ">>";
    }
});

window.onload = function () {
    page = function (x) {
        document.getElementById("pageView").src = "pages/" + x + ".html";
        console.log("pages/" + x + ".html");

        folderViewExpanded = false;

        expandFolderViewButton.style.left = "0vw";
        folderView.style.width = "0vw";

        expandFolderViewButton.innerText = ">>";
    };
};
