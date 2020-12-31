class Game
{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }


    update(state){
        database.ref('/').update({
            gameState: state
        });
    }

   async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val();
                player.getCount();
            }
            player.getCount();
            form = new Form();
            form.display();
        }
            car1= createSprite(100,200);
            car1.addImage(carImg1);
            car2= createSprite(300,200);
            car2.addImage(carImg2);
            car3= createSprite(500,200);
            car3.addImage(carImg3);
            car4= createSprite(700,200);
            car4.addImage(carImg4);

            cars=[car1,car2,car3,car4];
    }

    play(){
        form.hide();
       
        Player.getPlayerInfo();
        if(allPlayers!==undefined){
            background("brown");
            image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=200;
            var y;
            for(var p in allPlayers){
                index=index+1;
                x=x+230;
                y=displayHeight-allPlayers[p].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;
                if(index===player.index){
                    fill("red");
                    ellipse(x,y,60,60);
                     camera.position.x=displayWidth/2;
                   camera.position.y=cars[index-1].y;
                }
            }
        }

        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=50;
            player.update();            
        }
        player.getCarsAtEnd();

       if(player.distance>4500){
           gameState=2;
           player.rank+=1;
           Player.updateCarsAtEnd(player.rank);
       }
        drawSprites();
    }

    end(){
        console.log("Game Ends");
        console.log(player.rank);
    }
}