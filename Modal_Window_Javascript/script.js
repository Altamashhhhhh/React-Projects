const modal = document.querySelector(".modal")
const showModelBtns = document.querySelectorAll(".show-modal")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".close-modal")

function openModal(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

function closeModal(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

for(let i=0; i<showModelBtns.length ; i++){
    showModelBtns[i].addEventListener("click" ,openModal )
}


closeModalBtn.addEventListener("click" , closeModal)
overlay.addEventListener("click" , closeModal)