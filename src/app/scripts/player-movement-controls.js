import { keyPressed } from 'kontra';

const movement = (player) => {
  //movement
  let friction = 0.08;
  let threshold = 0.1; // Just ensures that the number

  if (keyPressed('left')) {
    player.dx = -player.speed;
  } else if (keyPressed('right')) {
    // right arrow pressed
    player.dx = player.speed;
  } else {
    if (player.dx > 0) {
      player.dx -= friction;
      if(player.dx < threshold){
        player.dx = 0;
      }
    } else if (player.dx < 0) {
      player.dx += friction;
      if(player.dx > threshold){
        player.dx = 0;
      }
    } 
  }

  if (keyPressed('up')) {
    player.dy = -player.speed;
  } else if (keyPressed('down')) {
    player.dy = player.speed;
  } else {
    if (player.dy > 0) {
      player.dy -= friction;
      if(player.dy < threshold){
        player.dy = 0;
      }
    } else if (player.dy < 0) {
      player.dy += friction;
      if(player.dy > threshold){
        player.dy = 0;
      }
    } 
  }

}

export default movement;