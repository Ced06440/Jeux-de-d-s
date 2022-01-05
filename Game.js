var score, gamePlaying, roundScore;
var activePlayer = document.querySelector('.active');


document.querySelector('.lancer').addEventListener('click', function() {
    
        //Numeros dés au hasard
        var dice = Math.floor(Math.random()*6)+1;

        //Affichage face du dés
        var diceDOM = document.querySelector('.dés');
        diceDOM.src = 'dés-' + dice + '.png';

        //Ajout de la régle, si le dés tombe sur 1 c'est au tour du joueur suivant
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#score').textContent = roundScore;
        } else {
            nextPlayer();
        }  
});
