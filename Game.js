let score = [] ;
let scoreEnCours;
let jouer = true;
let joueurActif

rejouer()
//fenetre()

//function du boutton lance le dés
document.querySelector('.btn-lancer').addEventListener('click', function() {
    if(jouer){
        //Numeros dés au hasard
        let dice = Math.floor(Math.random()*6)+1;

        //Affichage face du dés
        let diceDOM = document.querySelector('.dés');
        diceDOM.src = 'dés-' + dice + '.png';

        //Ajout de la régle, si le dés tombe sur 1 c'est au tour du joueur suivant
        if (dice !== 1) {
            document.querySelector('#score-' + joueurActif).textContent = scoreEnCours += dice;
        } else {
            document.querySelector('#score-' + joueurActif).textContent =scoreEnCours = 0;
            nextPlayer();
        }
    };  
});

// Ajout du boutton qui permet d'ajouter le score en cours au score global
document.querySelector('.btn-ajouter').addEventListener('click', function() {
    if(jouer){

        //Ajoute le roundscore au score Global
        
        score[joueurActif] += scoreEnCours;

        document.querySelector('#scoreGlobal-' + joueurActif).textContent = score[joueurActif];
        console.log(score)

        //condition de victoire si le score global atteint 100, la partie est gagné
        if(score[joueurActif] >= 100){
            
            document.querySelector('.player-' + joueurActif).classList.add("winner");
            document.querySelector('.player-' + joueurActif).classList.remove('active');
            document.getElementById('name-' + joueurActif).textContent = 'Winner!';
            jouer = false;
        }else{
            nextPlayer()
        }
    };
});

function nextPlayer(){
    joueurActif === 0 ? joueurActif = 1 : joueurActif = 0;
    scoreEnCours = 0;

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
};

document.querySelector('.btn-nouvellePartie').addEventListener('click', rejouer);

function rejouer() {
    score = [0,0];
    joueurActif = 0;
    scoreEnCours = 0;
    jouer = true;
    
    
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
};

function fenetre(){
    alert(`Bienvenue dans un jeu de dés, ou le but est d'atteindre le score de 100 avant son adversaire, ci tu tombe sur le nombre 1 tu perd ton score en cours. Alors arrete toi au bon moment !!!! BONNE CHANCE `)
}