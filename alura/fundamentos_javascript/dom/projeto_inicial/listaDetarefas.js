const botao = document.querySelector("[data-form-button]")
const list = document.querySelector("[data-list]")

const onButtonClick = (evento) => {
   const inputField = document.querySelector("[data-form-input]")
   evento.preventDefault()
   console.log(inputField.value)

   const task = document.querySelector("[data-task]")
   const content = `<li class="task" data-task><p class="content">${inputField.value}</p></li>` 
   list.innerHTML = list.innerHTML + content

   inputField.value = ""

}

botao.addEventListener("click", onButtonClick)