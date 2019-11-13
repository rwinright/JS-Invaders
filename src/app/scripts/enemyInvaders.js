import { Vector } from 'kontra';

const enemyInvaderController = (question, enemyPool, canvas) => {

  enemyPool.get({
    x: 0, //Randomly set this with a random value generator
    y: 0,
    question: "",
    questionType: false,
    color: "blue",
    width: 30,
    height: 20,
    anchor: {x:0.5, y:0.5},
    dx: 0,
    dy: 2,
    ttl: Infinity,
  })

  let eInvader = enemyPool.getAliveObjects();

  eInvader.forEach((invader)=>{ //Loop through and apply to every new 
    //Make sure the dude doesn't go out of bounds.
    invader.position.clamp(0+invader.width/2, 0 + invader.height/2, canvas.width - invader.width/2, canvas.height + invader.height/2);

      if(invader.y >= canvas.height - invader.height/2){
        invader.y = 0;
        invader.x = Math.floor(Math.random() * canvas.width);
        //Increase the speed?
        if(invader.dy < 5){
          invader.dy += 0.5
          if (invader.dy > 2 ) {
            invader.dx = Math.floor(Math.random() * -3) + 2
          }
        }
      }
    
  })

}

export default enemyInvaderController;