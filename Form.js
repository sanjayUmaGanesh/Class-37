class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement('h3')
    }
    hidden(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Racing time");
        title.position(530,10);
       // var input = createInput("name");
        this.input.position(530,200);
        //var button = createButton("play")
        this.button.position(530,235);
       // var greeting = createElement('h3')
        
       this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;   
            

            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello" + player.name);
            this.greeting.position(530,160);
        })
    }
}