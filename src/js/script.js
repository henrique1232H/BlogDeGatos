const removeContainer = () => {
    const main = document.querySelector("main div");
    const title = document.querySelector(".title");

    const widthScreen = window.innerWidth;

    if(widthScreen  <= 700) {
        main.classList.remove("container");
        title.classList.add("container");
    } else {
        main.classList.add("container")
        title.classList.remove("container")
    }

}
setInterval(() => {
    removeContainer();
}, 50)