let gameover = false;

async function input(arr, indx) {

  //Press sound
  const clksound = new Audio("game_data/Click Sound.mp3");
  clksound.play();

  return new Promise((resolve) => {

    //Button flag
    let one = 1,
      two = 1,
      three = 1,
      four = 1,
      five = 1,
      six = 1,
      seven = 1,
      eight = 1,
      nine = 1;
      
//Button flag update
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == "box1") {
        one = 0;
      } else if (arr[i] == "box2") {
        two = 0;
      } else if (arr[i] == "box3") {
        three = 0;
      } else if (arr[i] == "box4") {
        four = 0;
      } else if (arr[i] == "box5") {
        five = 0;
      } else if (arr[i] == "box6") {
        six = 0;
      } else if (arr[i] == "box7") {
        seven = 0;
      } else if (arr[i] == "box8") {
        eight = 0;
      } else if (arr[i] == "box9") {
        nine = 0;
      }
    }

    //Click Event listener
    if (one == 1) {
      let button1 = document.querySelector(".box1");
      button1.addEventListener("click", function () {
        if (gameover) return;

        button1.classList.remove("xstyle", "ostyle");

        if (indx % 2 == 0) {
          button1.classList.add("xstyle");
          button1.innerHTML = "X";
        } else {
          button1.classList.add("ostyle");
          button1.innerHTML = "O";
        }

        resolve("box1");
      });
    }

    if (two == 1) {
      let button2 = document.querySelector(".box2");
      button2.addEventListener("click", function () {
        if (gameover) return;

        button2.classList.remove("xstyle", "ostyle");
        if (indx % 2 == 0) {
          button2.classList.add("xstyle");
          button2.innerHTML = "X";
        } else {
          button2.classList.add("ostyle");
          button2.innerHTML = "O";
        }

        resolve("box2");
      });
    }

    if (three == 1) {
      let button3 = document.querySelector(".box3");
      button3.addEventListener("click", function () {
        if (gameover) return;

        button3.classList.remove("xstyle", "ostyle");
        if (indx % 2 == 0) {
          button3.classList.add("xstyle");
          button3.innerHTML = "X";
        } else {
          button3.classList.add("ostyle");
          button3.innerHTML = "O";
        }

        resolve("box3");
      });
    }

    if (four == 1) {
      let button4 = document.querySelector(".box4");
      button4.addEventListener("click", function () {
        if (gameover) return;

        button4.classList.remove("xstyle", "ostyle");
        if (indx % 2 == 0) {
          button4.classList.add("xstyle");
          button4.innerHTML = "X";
        } else {
          button4.classList.add("ostyle");
          button4.innerHTML = "O";
        }

        resolve("box4");
      });
    }

    if (five == 1) {
      let button5 = document.querySelector(".box5");
      button5.addEventListener("click", function () {
        if (gameover) return;

        button5.classList.remove("xstyle", "ostyle");
        if (indx % 2 == 0) {
          button5.classList.add("xstyle");
          button5.innerHTML = "X";
        } else {
          button5.classList.add("ostyle");
          button5.innerHTML = "O";
        }

        resolve("box5");
      });
    }

    if (six == 1) {
      let button6 = document.querySelector(".box6");
      button6.addEventListener("click", function () {
        if (gameover) return;

        button6.classList.remove("xstyle", "ostyle");
        if (indx % 2 == 0) {
          button6.classList.add("xstyle");
          button6.innerHTML = "X";
        } else {
          button6.classList.add("ostyle");
          button6.innerHTML = "O";
        }

        resolve("box6");
      });
    }

    if (seven == 1) {
      let button7 = document.querySelector(".box7");
      button7.addEventListener("click", function () {
        if (gameover) return;

        button7.classList.remove("xstyle", "ostyle");
        if (indx % 2 == 0) {
          button7.classList.add("xstyle");
          button7.innerHTML = "X";
        } else {
          button7.classList.add("ostyle");
          button7.innerHTML = "O";
        }

        resolve("box7");
      });
    }

    if (eight == 1) {
      let button8 = document.querySelector(".box8");
      button8.addEventListener("click", function () {
        if (gameover) return;

        button8.classList.remove("xstyle", "ostyle");
        if (indx % 2 == 0) {
          button8.classList.add("xstyle");
          button8.innerHTML = "X";
        } else {
          button8.classList.add("ostyle");
          button8.innerHTML = "O";
        }

        resolve("box8");
      });
    }

    if (nine == 1) {
      let button9 = document.querySelector(".box9");
      button9.addEventListener("click", function () {
        if (gameover) return;

        button9.classList.remove("xstyle", "ostyle");

        if (indx % 2 == 0) {
          button9.classList.add("xstyle");
          button9.innerHTML = "X";
        } else {
          button9.classList.add("ostyle");
          button9.innerHTML = "O";
        }

        resolve("box9");
      });
    }
  });
}




  //main function
async function main() {

  let arr = [];

  //win condition
  let win1 = ["box1", "box2", "box3"];
  let win2 = ["box4", "box5", "box6"];
  let win3 = ["box7", "box8", "box9"];
  let win4 = ["box1", "box4", "box7"];
  let win5 = ["box2", "box5", "box8"];
  let win6 = ["box3", "box6", "box9"];
  let win7 = ["box1", "box5", "box9"];
  let win8 = ["box3", "box5", "box7"];


  for (let i = 1; i <= 9; i++) {

    // Light and Name update
    let greenbtn = document.querySelector(".green");
    let redbtn = document.querySelector(".red");

    if (i % 2 != 0) {
      greenbtn.classList.add("greenon");
      redbtn.classList.remove("redon");
      redbtn.classList.add("redoff");

      name.innerHTML = `${name1}'s Turn`;
      name.style.color="rgb(0, 129, 26)";

    } else {
      greenbtn.classList.remove("greenon");
      greenbtn.classList.add("greenoff");
      redbtn.classList.add("redon");
      
      name.innerHTML = `${name2}'s Turn`;
       name.style.color="rgba(232, 0, 0, 1)";
    }


    //Event listener function call
    let indata = await input(arr, i);
    arr.push(indata);


//Update Win Condition
    let wc1 = 0,
      wc2 = 0,
      wc3 = 0,
      wc4 = 0,
      wc5 = 0,
      wc6 = 0,
      wc7 = 0,
      wc8 = 0,
      wc9 = 0;

    let j;
    if (i % 2 == 0) {
      j = 1;
    } 
    else {
      j = 0;
    }
    if (arr.length >= 5) {
      for (j; j < arr.length; j += 2) {
        if (arr[j] == "box1") {
          wc1++;
          wc4++;
          wc7++;
        } else if (arr[j] == "box2") {
          wc1++;
          wc5++;
        } else if (arr[j] == "box3") {
          wc1++;
          wc6++;
          wc8++;
        } else if (arr[j] == "box4") {
          wc2++;
          wc4++;
        } else if (arr[j] == "box5") {
          wc2++;
          wc5++;
          wc7++;
          wc8++;
        } else if (arr[j] == "box6") {
          wc2++;
          wc6++;
        } else if (arr[j] == "box7") {
          wc3++;
          wc4++;
          wc8++;
        } else if (arr[j] == "box8") {
          wc3++;
          wc5++;
        } else if (arr[j] == "box9") {
          wc3++;
          wc6++;
          wc7++;
        }
      }
    }


  //Check win condition
    if (
      wc1 == 3 ||
      wc2 == 3 ||
      wc3 == 3 ||
      wc4 == 3 ||
      wc5 == 3 ||
      wc6 == 3 ||
      wc7 == 3 ||
      wc8 == 3 ||
      wc9 == 3
    ) {

      //Game over Sound
      const eliminated = new Audio("game_data/Eliminated Sound.mp3");
      eliminated.play();

     //Win message
      let winmessage;
      if (i % 2 != 0) {
        winmessage = name1 + " Wins!";
      } else {
        winmessage = name2 + " Wins!";
      }

      body.appendChild(display_box_result);
      display_box_result.style.backgroundImage= "url(game_data/Win_Celebration.gif)";

      display_box_result.innerHTML = ``;
      display_box_result.innerHTML = `
        <div class="game_over">
          <p>${winmessage} </p>
          <span>🏆</span>
          <div onclick="window.location.reload();" class="new_game">Play again</div>
        </div>
      `;

  
      gameover = true;
      return;
    }


    if(i==9){

      //Game Tie message
      body.appendChild(display_box_result);
      display_box_result.innerHTML = ``;
      display_box_result.innerHTML = `
        <div class="game_over">
          <p>Match Tie</p>
         <span>🤝</span>
          <div onclick="window.location.reload();" class="new_game">Play again</div>
        </div>
      `;
    }
  }
}



//Input Name box create
let body = document.getElementsByClassName("body")[0];

let display_box = document.createElement("div");
display_box.className = "display_box";
let display_box_result = document.createElement("div");
display_box_result.className = "display_box_result";

body.appendChild(display_box);


display_box.innerHTML = `
<div class="inputbox">
      <div class="inputbox-head">Enter player names</div>
      <div class="player1">
        <p>Player 1 Name:</p>
        <input placeholder="Player 1" id="player1" type="text">
      </div>
      
      <div class="player2">
        <p>Player 2 Name:</p>
        <input placeholder="Player 2" id="player2" type="text">
      </div>

      <div class="inputbox-btn">Start<div>
</div>
`;

//Input Name
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let button = document.getElementsByClassName("inputbox-btn")[0];

let name = document.querySelector(".name");

let name1 = "Player 1";
let name2 = "Player 2";

button.addEventListener("click", function () {
  let namein1 = player1.value;
  let namein2 = player2.value;

  if (namein1) {
    name1 = namein1;
  }
  if (namein2) {
    name2 = namein2;
  }

  name.innerHTML = `${name1}'s Turn`;

  
  //Background Music play
  const background = new Audio("game_data/Background_Music.mp3");
  background.volume = 0.5;
  background.loop = true;
  background.play();

  display_box.remove();
});


function start() {
  

  main();
}

start();
