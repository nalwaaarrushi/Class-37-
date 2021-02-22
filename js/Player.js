class Player {
  constructor(){
    this.distance = 0; 
    this.index = null; 
    this.name = null; 
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  //player.update();
  update(){
    var playerIndex = "players/player" + this.index;
                    // players/player + 1
                    // players/player1
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance
    });
  }

  //Player.getPlayerInfo();
  static getPlayerInfo(){
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data)=>{
      allPlayers = data.val(); 
    })

  }
}
