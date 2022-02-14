document.addEventListener("DOMContentLoaded", function() {
    const landscape = document.getElementById("landscape");
    const locationName = document.getElementById("location-name");

    const map = {
        "house": {
            img: "img/dum.png",
            name: "Dům",
            left: "forest1"
        },

        "forest1": {
            img: "img/les.png",
            name: "Les u domu",
            right: "house",
            up: "forest2"
        },

        "forest2": {
            img: "img/les.png",
            name: "Střed lesa",
            left: "forest3",
            right: "forest4",
            down: "forest1"
        },

        "forest3": {
            img: "img/les.png",
            name: "Les u hradu",
            left: "castle",
            right: "forest2",
        },

        "forest4": {
            img: "img/les.png",
            name: "Les u rybníka",
            left: "forest3",
            right: "pond",
        },

        "castle": {
            img: "img/hrad.png",
            name: "Hrad",
            right: "forest3",
        },

        "pond": {
            img: "img/rybnik.png",
            name: "Jezero",
            left: "forest4",
        }
    }

    const arrows = {
        left: document.getElementById("arrow-left"),
        up: document.getElementById("arrow-up"),
        down: document.getElementById("arrow-down"),
        right: document.getElementById("arrow-right")
    }

    arrows.left.addEventListener("click", function(ev) {
        ev.stopPropagation();
        const dest = arrows.left.getAttribute("dest");
        if (dest !== undefined) {
            setLocation(dest);
        }
    });

    arrows.right.addEventListener("click", function(ev) {
        ev.stopPropagation();
        const dest = arrows.right.getAttribute("dest");
        if (dest !== undefined) {
            setLocation(dest);
        }
    });

    arrows.up.addEventListener("click", function(ev) {
        ev.stopPropagation();
        const dest = arrows.up.getAttribute("dest");
        if (dest !== undefined) {
            setLocation(dest);
        }
    });

    arrows.down.addEventListener("click", function(ev) {
        ev.stopPropagation();
        const dest = arrows.down.getAttribute("dest");
        if (dest !== undefined) {
            setLocation(dest);
        }
    });

    function setLocation(location) {
        const data = map[location || "castle"];

        landscape.setAttribute("src", data.img);
        locationName.innerText = data.name;

        if (data.left !== undefined) {
            arrows.left.style.display = "initial";
            arrows.left.setAttribute("dest", data.left);
        } else {
            arrows.left.style.display = "none";
        }

        if (data.right !== undefined) {
            arrows.right.style.display = "initial";
            arrows.right.setAttribute("dest", data.right);
        } else {
            arrows.right.style.display = "none";
        }

        if (data.up !== undefined) {
            arrows.up.style.display = "initial";
            arrows.up.setAttribute("dest", data.up);
        } else {
            arrows.up.style.display = "none";
        }

        if (data.down !== undefined) {
            arrows.down.style.display = "initial";
            arrows.down.setAttribute("dest", data.down);
        } else {
            arrows.down.style.display = "none";
        }
    }

    setLocation("castle");
})