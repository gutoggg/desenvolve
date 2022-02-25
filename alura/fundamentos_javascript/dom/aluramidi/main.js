const buttons = document.querySelectorAll('.tecla');

for(let i = 0; i < buttons.length; i++){
  const assignedAudio = document.querySelector(`#som_${buttons[i].classList[1]}`);
  buttons[i].onkeydown = (event) => {

    if (event.code === "Enter" || event.code === "Space" ) {
      buttons[i].classList.add("ativa")
    }
    
  }

  buttons[i].onkeyup = (event) => {
    if (event.code === "Enter" || event.code === "Space" ) {
      buttons[i].classList.remove("ativa")
    }

  }

  buttons[i].onclick = () => {
    assignedAudio.currentTime = 0;
    assignedAudio.play();
  }
}
