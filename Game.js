let score = document.querySelector('.scoreGlobal-0');
let roundScore = document.getElementById('#score-0');
let gamePlaying = false;
let player1 = document.querySelector('.player-0');
let player2 = document.querySelector('.player-1');


document.querySelector('.lancer').addEventListener('click', function() {
    
        //Numeros dés au hasard
        var dice = Math.floor(Math.random()*6)+1;

        //Affichage face du dés
        var diceDOM = document.querySelector('.dés');
        diceDOM.src = 'dés-' + dice + '.png';

        //Ajout de la régle, si le dés tombe sur 1 c'est au tour du joueur suivant
        if (dice !== 1) {
            document.querySelector('#score-0').textContent = roundScore += dice;
        } else {
            document.querySelector('#score-0').textContent =roundScore = 0;
            nextPlayer();
        }  
});

document.querySelector('.ajouter').addEventListener('click', function() {

    let scoreG = roundScore + score;
    document.querySelector('#scoreGlobal-0').textContent = scoreG;

    document.querySelector('#score-0').textContent=0

    if(scoreG >= 100){
        document.querySelector('player-0').classList.add('winner');
        document.querySelector('player-0').classList.remove('active')
    }else{
        nextPlayer()
    }

});