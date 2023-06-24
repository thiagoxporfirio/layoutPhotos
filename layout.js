/*imagem*/
let img = document.querySelectorAll(".img")
let Modal = document.querySelector(".HandleModal")
let imgModal = document.querySelector("#modalImg")

let closeIcon = document.querySelector("#close-icon")
console.log(img)


img.forEach((img) => {
    img.addEventListener("click", () => {
        let src = img.getAttribute('src');
        imgModal.setAttribute("src", src)

        Modal.style.display = 'flex'})
})

const closeHandler = () => {
    Modal.setAttribute('style', 'display:none')
   
}


if(closeIcon){
    closeIcon.addEventListener('click', (event)=> {

        event.preventDefault()
        closeHandler()
        
    }
    
)}
