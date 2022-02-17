const excluirTarefa = (evento) => {
   const botaoExclui = evento.target
   const tarefaParaExcluir = botaoExclui.parentElement

   tarefaParaExcluir.remove()
}

const BotaoRemove = () => {
   const botaoDeleta = document.createElement("button")
   botaoDeleta.classList.add = "delete-button"
   botaoDeleta.innerText = "deletar"

   botaoDeleta.addEventListener("click", excluirTarefa)

   return botaoDeleta
}

export default BotaoRemove