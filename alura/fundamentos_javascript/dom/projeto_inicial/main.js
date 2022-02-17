   import BotaoConclui from "./componentes/concluiTarefa.js"
   import BotaoRemove from "./componentes/deletaTarefa.js"
   
   const botao = document.querySelector("[data-form-button]")
   const list = document.querySelector("[data-list]")

   const onButtonClick = (evento) => {
      evento.preventDefault()
      const inputField = document.querySelector("[data-form-input]")

      if (inputField.value !== "") {
         const content = `<p class="content">${inputField.value}</p>`
         const task = document.createElement('li')

         task.classList.add('task')
         task.innerHTML = content
         
         task.appendChild(BotaoConclui())
         task.appendChild(BotaoRemove())
         list.appendChild(task)

         inputField.value = ""

      }
      inputField.focus()
   }

   botao.addEventListener("click", onButtonClick)