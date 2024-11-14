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

document.addEventListener("keydown" , function (e){
    if(e.key === "Escape" && !overlay.classList.contains("hidden")){
        closeModal()
    }
    if(e.key === "Enter"  ){
        openModal()
    }
    if(e.key === "Shift"){
        document.querySelector("body").style.backgroundColor = "red"
    }
    if(e.key === "g"){
        document.querySelector("body").style.backgroundColor = "green"
    }
    if(e.key === "b"){
        document.querySelector("body").style.backgroundColor = "blue"
    }
    console.log(e.key)
})


closeModalBtn.addEventListener("click" , closeModal)
overlay.addEventListener("click" , closeModal)