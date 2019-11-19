import { keyPressed } from 'kontra';

const shooty = (player, bulletPool, audio) => {

  let laser = audio[0];

  if (keyPressed("z")) { //Set gun to truthy or falsy 
    player.gunStatus = !player.gunStatus
  }

  if (keyPressed('x')) {
    if (bulletPool.getAliveObjects().length < 2) {
      laser.play();
      laser.onplaying = () => {
        bulletPool.get({
          x: player.x + player.width / 2,
          y: player.y,
          color: player.gunStatus ? "green" : "red",
          bulletType: player.gunStatus,
          width: 5,
          anchor: { x: 0.5, y: 0.5 },
          height: 20,
          dy: -4,
          ttl: Infinity
        });
      }
      console.log(laser.getOwnPropertyNames)
    }
  }
  //Track objects that have not expired.
  let b = bulletPool.getAliveObjects();

  //Set the "Time To Live" to 0 to refresh the bullet pool count.
  b.forEach((blt) => {
    if (blt.y <= 0) {
      blt.ttl = 0; //Destroy the bullet 
    }
  })
}

export default shooty