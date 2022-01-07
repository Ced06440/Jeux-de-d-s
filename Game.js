let score = document.querySelector('.scoreGlobal-');
let roundScore = document.getElementById('#score-');
let gamePlaying = true;
let activePlayer

init()

//function du boutton lance le dés
document.querySelector('.btn-lancer').addEventListener('click', function() {
    if(gamePlaying){
        //Numeros dés au hasard
        var dice = Math.floor(Math.random()*6)+1;

        //Affichage face du dés
        var diceDOM = document.querySelector('.dés');
        diceDOM.src = 'dés-' + dice + '.png';

        //Ajout de la régle, si le dés tombe sur 1 c'est au tour du joueur suivant
        if (dice !== 1) {
            document.querySelector('#score-' + activePlayer).textContent = roundScore += dice;
        } else {
            document.querySelector('#score-' + activePlayer).textContent =roundScore = 0;
            nextPlayer();
        }
    };  
});

// Ajout du boutton qui permet d'ajouter le score en cours au score global
document.querySelector('.btn-ajouter').addEventListener('click', function() {
    if(gamePlaying){

        let scoreG = roundScore + score;
        score = scoreG;

        document.querySelector('#scoreGlobal-' + activePlayer).textContent = score;
        console.log(score)

        //condition de victoire si le score global atteint 100, la partie est gagné
        if(scoreG >= 100){
            document.querySelector('player-' + activePlayer).classList.add('winner');
            document.querySelector('player-' + activePlayer).classList.remove('active')
        }else{
            nextPlayer()
        }
    };
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
};

document.querySelector('.btn-nouvellePartie').addEventListener('click', init);

function init() {
    score = 0;
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.getElementById('scoreGlobal-0').textContent = '0';
    document.getElementById('scoreGlobal-1').textContent = '0';
    document.getElementById('score-0').textContent ='0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0').classList.remove('winner');
    document.querySelector('.player-1').classList.remove('winner');
    document.querySelector('.player-0').classList.remove('active');
    document.querySelector('.player-1').classList.remove('active');
    document.querySelector('.player-0').classList.add('active');
}