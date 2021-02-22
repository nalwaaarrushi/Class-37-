class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
      //data.val() - fetches or gets the json data from database
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){ 
    form.hide(); 

    textSize(30);
    text("Game Start", 120, 100);

    Player.getPlayerInfo();

    //if we do not give any value to the variable when we create it then it shows undefined
    //if we do not initialize the variable when we create it then it shows undefined
    if(allPlayers !== undefined)
    {
      var display_position = 130;

      //plr is player1
      //for in loop is used only on array
      for(var plr in allPlayers)  //player1 {name: "Riddhi", distance: 0}
      {
        if (plr === "player" + player.index)
        {
          fill("red");
        }
        else
        {
          fill("black");
        }
          
        display_position += 20;

        textSize(15);
        //allPlayers[player1].name
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120, display_position);
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null)
    {
      player.distance += 50;
      player.update();
    }
   
    

    
  }
}
