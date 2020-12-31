class Form{
    constructor(){
        this.input=createInput("name");
        this.button=createButton("play");
        this.greeting=createElement('h1');
        this.reset = createButton("reset");
    }
    display(){
        var title=createElement('h1');
        title.html("Car Racing Game");
        title.position(displayWidth/2-100,30);
         
        this.input.position(displayWidth/2-150,displayHeight/2-150);
       
       this. button.position(displayWidth/2+150,displayHeight/2+100);
       this.button.size(100);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello "+player.name);
            this.greeting.position(displayWidth/2-20,displayHeight/2);
            
        });

        this.reset.mousePressed(()=>{
            game.update(0);
            player.updateCount(0);

        });
    }

        hide(){
            this.greeting.hide();
            this.input.hide();
            this.button.hide();
            
        }

}