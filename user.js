class user {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
    
        Datainp = new Datainp()
        Datainp.display();
      }
  
  
    play(){
      Datainp.hide();
    }
  
    end(){
    }
  }
  