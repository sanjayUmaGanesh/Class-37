class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        var pCountref = database.ref('playerCount');
        pCountref.on("value",function(data){
            playerCount = data.val();
}
        )
    }
    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })
    }
    update(){
        var pIndex = "players/player" + this.index;
        database.ref(pIndex).set({
            name: this.name,
            distance: this.distance,
            index: this.index
        })
        console.log(this.index);
    }
    static getPlayerInfo(){
        var playerinfo = database.ref('players');
        playerinfo.on("value",(data) => {
            allP = data.val();
        })
    }
    
}

