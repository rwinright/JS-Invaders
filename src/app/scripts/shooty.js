import { keyPressed } from 'kontra';

const shooty = (player, bulletPool) => {
  if (keyPressed('x')) {
    bulletPool.get({
      x: player.x + 8,
      y: player.y,
      color: player.gunStatus ? "green" : "red",
      width: 10,
      anchor: {x:0.5, y:0.5},
      height: 5,
      dy: -4,
      ttl: Infinity,
    })
  }

  if(keyPressed("z")){ //Set gun to truthy or falsy 
    player.gunStatus = !player.gunStatus
  }
  //Track objects that have not expired.
  let b = bulletPool.getAliveObjects();

  //Set the "Time To Live" to 0 to refresh the pool count.
  b.forEach((blt) => {
    blt.rotation += 2
    if (blt.y <= 0 /*|| blt.collidesWith(player) Change to enemy block later */) {
      blt.ttl = 0; //Destroy the bullet
    }
  })
}

export default shooty