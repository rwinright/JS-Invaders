const bulletCollision = (invaderPool, bulletPool, player) => {

  let bullets = [];
  let invaders = [];

  bullets = bulletPool.getAliveObjects();
  invaders = invaderPool.getAliveObjects();

  //If there are items in the invaders array, it will be true.
  //Empty arrays are always "falsy" - so this block of code will only run if there's items available.
  // Prevents annoying error messages.
  if(invaders.length){
    for(let i = 0, invader; invader = invaders[i]; i++){
      if(invader.collidesWith(player)){
        //Player interactions

      }
    }
  }

  if(bullets.length){ //If there are bullets present
    for(let j = 0, bullet; bullet = bullets[j]; j++){ //Iterate through the bullets so we have access to a single bullet.
      for(let i = 0, invader; invader = invaders[i]; i++){ //Same with the enemies.
        // console.log(`invader question: ${invader.question}`)
        if(bullet.collidesWith(invader)){
          //If the bullet hits an enemy, destroy the bullet.
          bullet.ttl = 0;
          if(bullet.bulletType === invader.questionType){
            //If the question's right, destroy the invader.
            invader.ttl = 0;
          } else {
            //Do something if the answer bullet was wrong?
          }
        }
      }
    }
  }

}


export default bulletCollision;