const bulletCollision = (invaderPool, bulletPool, player) => {

  let bullets = [];
  let invaders = [];
  bullets = bulletPool.getAliveObjects();
  invaders = invaderPool.getAliveObjects();

  if(invaders.length){
    for(let i = 0, invader; invader = invaders[i]; i++){
      if(invader.collidesWith(player)){
        console.log("Hello player");
      }
    }
  }

  if(bullets.length){
    for(let j = 0, bullet; bullet = bullets[j]; j++){
      for(let i = 0, invader; invader = invaders[i]; i++){
        console.log(`invader question: ${invader.question}`)
        if(bullet.collidesWith(invader)){
          bullet.ttl = 0;
          if(bullet.bulletType === invader.questionType){
            invader.ttl = 0;
            // console.log("Bullet and invader are good")
          } else {
            // console.log("Nope")
          }
        }
      }
    }
  }

}


export default bulletCollision;