// global variables

let games = 0;

// menu

const menu = document.getElementById("menu");
const menuTitle = document.getElementById("menu-title");
const menuTriangle = document.getElementById("menu-triangle");
const menuList = document.getElementById("menu-list");


menuTitle.addEventListener("click", function() {
    menuList.classList.add("show"); 
});

menu.addEventListener("mouseleave", function() {
    menuList.classList.remove("show");
})

menuTitle.addEventListener("mouseover", function() {
    menuTriangle.classList.toggle("bi-caret-right");
    menuTriangle.classList.toggle("bi-caret-right-fill");
});

menuTitle.addEventListener("mouseout", function() {
    menuTriangle.classList.toggle("bi-caret-right-fill");
    menuTriangle.classList.toggle("bi-caret-right");
});

// menu avatar selection

let avatar = 0;
const menuProfilePic = document.getElementById("menu-profile-pic");
const humanAvatar = document.getElementById("humanav");

menuProfilePic.addEventListener("click", function() {
    if (avatar == 0){
    avatar = 1;
    humanAvatar.src = "images/human2.jpeg";
    document.getElementById("profile1").classList.toggle("active-menu-item");
    document.getElementById("profile2").classList.toggle("active-menu-item");
  } else if (avatar == 1){
    avatar = 2;
    humanAvatar.src = "images/human3.jpeg";
    document.getElementById("profile2").classList.toggle("active-menu-item");
    document.getElementById("profile3").classList.toggle("active-menu-item");
  } else {
    avatar = 0;
    humanAvatar.src = "images/human1.jpeg";
    document.getElementById("profile3").classList.toggle("active-menu-item");
    document.getElementById("profile1").classList.toggle("active-menu-item");
  }
});

// menu lang selection

let language = 0;
const menuLanguage = document.getElementById("menu-language");

menuLanguage.addEventListener("click", function() {
    if (language == 0){
        language = 1;
        document.getElementById("lang1").classList.toggle("active-menu-item");
        document.getElementById("lang2").classList.toggle("active-menu-item");
      } else if (language == 1){
        language = 2;
        document.getElementById("lang2").classList.toggle("active-menu-item");
        document.getElementById("lang3").classList.toggle("active-menu-item");
      } else {
        language = 0;
        document.getElementById("lang3").classList.toggle("active-menu-item");
        document.getElementById("lang1").classList.toggle("active-menu-item");
      }
});

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors'
    }
}

function playRound(playerSelection, computerSelection){
    games++;
    let player = playerSelection;
    let computer = computerSelection;
    if(player === computer){
        pscore.innerHTML++;
        cscore.innerHTML++;
        result.innerHTML == 'Tie!';
    } else if(player === 'rock'){
        if(computer === 'paper'){
            cscore.innerHTML++
            return 'You Lose! Paper beats Rock';
        } else {
            pscore.innerHTML++;
            return 'You Win! Rock beats Scissors';
        }
    } else if(player === 'paper'){
        if(computer === 'scissors'){
            cscore.innerHTML++;
            return 'You Lose! Scissors beats Paper';
        } else {
            pscore.innerHTML++;
            return 'You Win! Paper beats Rock';
        }
    } else if(player === 'scissors'){
        if(computer === 'rock'){
            cscore.innerHTML++;
            return 'You Lose! Rock beats Scissors';
        } else {
            pscore.innerHTML++;
            return 'You Win! Scissors beats Paper';
        }
    }
}