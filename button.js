let showHeroesBtn = document.querySelector('.show-heroes');
let welcomeTitle = document.querySelector('.welcome');
let startFightBtn = document.querySelector('.start-fight');
let heroesContainer = document.querySelector('.heroes-container');
let showWinner = document.querySelector('.show-winner');
let boxMessage = document.querySelector('.box');

showHeroesBtn.addEventListener('click', showHeroesFunc);

function showHeroesFunc() {
    heroesContainer.classList.add('d-flex');
    showHeroesBtn.classList.add('d-none');
    welcomeTitle.classList.add('d-none');
    startFightBtn.classList.add('d-block');
    showWinner.classList.add('d-none');
    boxMessage.classList.add('d-none');
}
startFightBtn.addEventListener('click', hideHeroesFunc);

function hideHeroesFunc() {
    heroesContainer.classList.remove('d-flex');
     welcomeTitle.classList.add('d-none');
    showHeroesBtn.classList.add('d-none');
    startFightBtn.classList.remove('d-block');
    showWinner.classList.add('d-block');
    boxMessage.classList.add('d-none');
}
 

