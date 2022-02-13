document.addEventListener("DOMContentLoaded", function() {
    const drawers = document.querySelectorAll("#content > .drawer");
    for (const drawer of drawers) {
        const header = drawer.getElementsByClassName("header")[0];
        header.addEventListener("click", function() {
            if (drawer.classList.contains("closed")) {
                drawer.classList.remove("closed");
            } else {
                drawer.classList.add("closed");
            }
        });
    }
});