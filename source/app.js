const button1 = document.querySelector("#one");
const button2 = document.querySelector("#two");
const button3 = document.querySelector("#three");
const button4 = document.querySelector("#four");
const button5 = document.querySelector("#five");
const button6 = document.querySelector("#six");
const button7 = document.querySelector("#seven");
const button8 = document.querySelector("#eight");
const button9 = document.querySelector("#nine");
const reset = document.querySelector("#reset");

const round = {
  player1: true,
  player2: false,
  tie: false,
};
const p1Turn = () => {
  round.player1 = true;
  round.player2 = false;
  check();
};
const p2Turn = () => {
  round.player1 = false;
  round.player2 = true;
  check();
};

reset.addEventListener("click", function () {
  button1.disabled = false;
  button2.disabled = false;
  button3.disabled = false;
  button4.disabled = false;
  button5.disabled = false;
  button6.disabled = false;
  button7.disabled = false;
  button8.disabled = false;
  button9.disabled = false;
  button1.innerHTML = "-";
  button2.innerHTML = "-";
  button3.innerHTML = "-";
  button4.innerHTML = "-";
  button5.innerHTML = "-";
  button6.innerHTML = "-";
  button7.innerHTML = "-";
  button8.innerHTML = "-";
  button9.innerHTML = "-";
});
button1.addEventListener("click", function () {
  if (round.player1) {
    button1.innerHTML = "X";
    p2Turn();
    button1.disabled = true;
    return;
  } else if (round.player2) {
    button1.innerHTML = "O";
    button1.disabled = true;
    p1Turn();
  }
});

button2.addEventListener("click", function () {
  if (round.player1) {
    button2.innerHTML = "X";
    button2.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button2.innerHTML = "O";
    button2.disabled = true;
    p1Turn();
  }
});
button3.addEventListener("click", function () {
  if (round.player1) {
    button3.innerHTML = "X";
    button3.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button3.innerHTML = "O";
    button3.disabled = true;
    p1Turn();
  }
});
button4.addEventListener("click", function () {
  if (round.player1) {
    button4.innerHTML = "X";
    button4.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button4.innerHTML = "O";
    button4.disabled = true;
    p1Turn();
  }
});
button5.addEventListener("click", function () {
  if (round.player1) {
    button5.innerHTML = "X";
    button5.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button5.innerHTML = "O";
    button5.disabled = true;
    p1Turn();
  }
});
button6.addEventListener("click", function () {
  if (round.player1) {
    button6.innerHTML = "X";
    button6.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button6.innerHTML = "O";
    button6.disabled = true;
    p1Turn();
  }
});
button7.addEventListener("click", function () {
  if (round.player1) {
    button7.innerHTML = "X";
    button7.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button7.innerHTML = "O";
    button7.disabled = true;
    p1Turn();
  }
});
button8.addEventListener("click", function () {
  if (round.player1) {
    button8.innerHTML = "X";
    button8.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button8.innerHTML = "O";
    button8.disabled = true;
    p1Turn();
  }
});
button9.addEventListener("click", function () {
  if (round.player1) {
    button9.innerHTML = "X";
    button9.disabled = true;
    p2Turn();
    return;
  } else if (round.player2) {
    button9.innerHTML = "O";
    button9.disabled = true;
    p1Turn();
  }
});
const check = () => {
  if (
    button1.innerHTML === "X" &&
    button2.innerHTML === "X" &&
    button3.innerHTML === "X"
  ) {
    console.log("X WINS!!!!!");
  }
  if (
    button4.innerHTML === "X" &&
    button5.innerHTML === "X" &&
    button6.innerHTML === "X"
  ) {
    console.log("X WINS!!!!!");
  }
  if (
    button7.innerHTML === "X" &&
    button8.innerHTML === "X" &&
    button9.innerHTML === "X"
  ) {
    console.log("X WINS!!!!!");
  }
};
