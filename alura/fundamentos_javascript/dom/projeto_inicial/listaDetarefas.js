const botao = document.querySelector("[data-form-button]")

const onButtonClick = (evento) => {
   const inputField = document.querySelector("[data-form-input]")
   evento.preventDefault()
   console.log(inputField.value)
   inputField.value = ""
}

botao.addEventListener("click", onButtonClick)