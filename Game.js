class Game{
    constructor(
    ){
    }
getState(){
var gStateRef = database.ref('gameState');
gStateRef.on("value",function(data){
    gameState = data.val();
})
}
update(state){
    database.ref('/').update({
        gameState: state
    })
}
start(){
    if(gameState === 0){
        player = new Player();
        player.getCount();
        form = new Form();
        form.display();
    }
}
play(){
    form.hidden();
    textSize(30);
    text("Game Start",530,160);
    Player.getPlayerInfo();
    var display_position = 400;
    if(allP !== undefined){
        for(var i in allP){
            display_position = display_position + 20;
            textSize(15);
            text(allP[i].name + " " + allP[i].distance, 200,display_position);
        }
    }
}
//if(keyDown(UP_))
}