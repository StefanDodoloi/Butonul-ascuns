let winningButton;

  function generateButtons(n) {
    const container = document.getElementById("buttons");

    for (let i = 0; i < n; i++) {
      const button = document.createElement("button");
      button.textContent = `Button ${i + 1}`;
      button.className = "btn btn-success";
      button.onclick = () => checkButton(i + 1);
      container.appendChild(button);
    }
  }

  function checkButton(clickedButton) {
    const resultMessage = document.getElementById("resultMessage");
    if (clickedButton === winningButton) {
      resultMessage.textContent = "You won!";
    } else {
      resultMessage.textContent = "Try again";
    }
  }

  function checkWinner() {
    const noButtonsInput = document.getElementById("noButtons");
    const n = parseInt(noButtonsInput.value);
    winningButton = Math.floor(Math.random() * n) + 1;
    generateButtons(n);
  }