const btn = document.querySelector(".btn__open")
const modal = document.querySelector(".modal")

const closeModel = () => {
    modal.classList.remove("modal--open")
}

btn.addEventListener("click", () => {
    modal.classList.add("modal--open")
})

modal.addEventListener("click", event => {
    const target = event.target
    if (target && target.classList.contains("modal") || target.classList.contains("modal__close-btn")) { 
        closeModel()
    }
})

document.activeElement("keydown", event => {
    if (event.code === "Escape" && modal.classList.contains("modal--open")) {
        closeModel()
    }
})