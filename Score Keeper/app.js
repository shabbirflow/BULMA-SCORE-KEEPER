const  team1 = {
    score:0,
    button: document.querySelector("#team1but"),
    display: document.querySelector("#team1display")
}
const team2 = {
    score:0,
    button: document.querySelector("#team2but"),
    display: document.querySelector("#team2display")
}
let maxplay = 5;
const reset =  document.querySelector("#reset")
let gameover = false;
const playingupto = document.querySelector("#maxplay")

function updatescores(team, opponent){
    if(!gameover){
        team.score +=1;
        team.display.innerText = team.score;
        if(team.score===maxplay){
            gameover = true;
            team.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            team.button.disabled = true;
            opponent.button.disabled = true;
        }}
}

team1.button.addEventListener('click',function(){
    updatescores(team1, team2);
});

team2.button.addEventListener('click', function(e){
    updatescores(team2, team1);
})
reset.addEventListener('click', resetstuff);

playingupto.addEventListener('change', function(e){
    maxplay = parseInt(this.value);
    resetstuff();
})

function resetstuff(){
    team2.score =0;
    team1.score =0;
    team1.display.innerText = team1.score
    team2.display.innerText = team2.score;
    team2.display.classList.remove('has-text-success', 'has-text-danger');
    team1.display.classList.remove('has-text-success', 'has-text-danger');
    gameover = false;
    team1.button.disabled = false;
    team2.button.disabled = false;
}