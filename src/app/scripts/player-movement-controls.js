import { keyPressed, Vector } from 'kontra';

const movement = (player) => {
  //movement
  let friction = 0.10;
  let threshold = 0.03; // Just ensures that the number

  if (keyPressed('left')) {
    player.dx = -player.speed;
  } else if (keyPressed('right')) {
    // right arrow pressed
    player.dx = player.speed;
  }

  if(player.dx > 0 && player.dx > threshold){
    player.dx -= friction;
  } else if(player.dx < 0 && player.dx < threshold){
    player.dx += friction;
  } else {
    player.dx = 0;
  }

  if (keyPressed('up')) {
    // up arrow pressed
    player.dy = -player.speed;
  } else if (keyPressed('down')) {
    // down arrow pressed
    player.dy = player.speed;
  }

  if(player.dy > 0 && player.dy > threshold){
    player.dy -= friction;
  } else if(player.dy < 0 && player.dy < threshold){
    player.dy += friction;
  } else {
    player.dy = 0;
  }
  
  console.log(`dy: ${player.dy} \n dx: ${player.dx}`)

}

export default movement;