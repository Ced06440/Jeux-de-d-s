var score , roundScore, gamePlaying, player;


document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying){

        //Numeros dés au hasard
        var dice = Math.floor(Math.random()*6)+1

        //Affichage face du dés
        var diceDOM = document.querySelector('.dés');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dés-' + dice + '.png';

        if(dice !== 1){
            roundScore += dice;
        } else {
            nextPlayer();
        }
    }
});
