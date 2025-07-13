let rollDice = () => {
  // Dice 1 boxes
  let d1_box1 = document.querySelector(".dice1 .box1");
  let d1_box2 = document.querySelector(".dice1 .box2");
  let d1_box3 = document.querySelector(".dice1 .box3");
  let d1_box4 = document.querySelector(".dice1 .box4");
  let d1_box5 = document.querySelector(".dice1 .box5");
  let d1_box6 = document.querySelector(".dice1 .box6");

  // Dice 2 boxes
  let d2_box1 = document.querySelector(".dice2 .box1");
  let d2_box2 = document.querySelector(".dice2 .box2");
  let d2_box3 = document.querySelector(".dice2 .box3");
  let d2_box4 = document.querySelector(".dice2 .box4");
  let d2_box5 = document.querySelector(".dice2 .box5");
  let d2_box6 = document.querySelector(".dice2 .box6");

  // Rolling gifs for each dice
  let d1_rolling = document.querySelector(".dice1 .rolling");
  let d2_rolling = document.querySelector(".dice2 .rolling");

  // Hide all dice faces for dice 1
  d1_box1.style.display = "none";
  d1_box2.style.display = "none";
  d1_box3.style.display = "none";
  d1_box4.style.display = "none";
  d1_box5.style.display = "none";
  d1_box6.style.display = "none";

  // Hide all dice faces for dice 2
  d2_box1.style.display = "none";
  d2_box2.style.display = "none";
  d2_box3.style.display = "none";
  d2_box4.style.display = "none";
  d2_box5.style.display = "none";
  d2_box6.style.display = "none";

  // Show rolling animations
  d1_rolling.style.display = "block";
  d2_rolling.style.display = "block";

  // Roll random numbers
  let number1 = Math.floor(1 + Math.random() * 6);
  let number2 = Math.floor(1 + Math.random() * 6);
  console.log("Dice 1:", number1, "Dice 2:", number2);

  setTimeout(() => {
    // Hide rolling animations
    d1_rolling.style.display = "none";
    d2_rolling.style.display = "none";

    // Show dice 1 face based on number1
    if (number1 === 1) d1_box1.style.display = "block";
    else if (number1 === 2) d1_box2.style.display = "block";
    else if (number1 === 3) d1_box3.style.display = "block";
    else if (number1 === 4) d1_box4.style.display = "block";
    else if (number1 === 5) d1_box5.style.display = "block";
    else if (number1 === 6) d1_box6.style.display = "block";

    // Show dice 2 face based on number2
    if (number2 === 1) d2_box1.style.display = "block";
    else if (number2 === 2) d2_box2.style.display = "block";
    else if (number2 === 3) d2_box3.style.display = "block";
    else if (number2 === 4) d2_box4.style.display = "block";
    else if (number2 === 5) d2_box5.style.display = "block";
    else if (number2 === 6) d2_box6.style.display = "block";
  }, 2000);
};
