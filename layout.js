/*imagem*/
let imgBtn = document.querySelector(".imgHandler")

let Modal = document.querySelector(".HandleLayout")
let closeIcon = document.querySelector("#close-icon")
let imgsrc = document.querySelector("#imgsrc")
console.log(imgsrc)

let modalImagem = document.getElementById('modalImg');

const successHandler = () => {
    Modal.setAttribute('style', 'display:flex')
   let src = imgsrc.getAttribute("src")

   modalImagem.setAttribute("src", src)
}

const closeHandler = () => {
    Modal.setAttribute('style', 'display:none')
   

}

if(imgBtn){
    imgBtn.addEventListener('click', (event)=> {
        event.preventDefault()

        console.log("clicou")
        successHandler();
    }
    
)}

if(closeIcon){
    closeIcon.addEventListener('click', (event)=> {

        event.preventDefault()
        closeHandler()
        
    }
    
)}
