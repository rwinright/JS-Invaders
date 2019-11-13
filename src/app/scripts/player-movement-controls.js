import { keyPressed } from 'kontra';

const movement = (player) => {
  //movement with inertia
  let friction = 0.08;
  let threshold = 0.1; // Just ensures that the number will snap to 0 after it reaches a certain number.

  //Movement handler detecting key press
  if (keyPressed('left')) {
    player.dx = -player.speed;
    //.dx basically just changes the direction of X movement.
  } else if (keyPressed('right')) {
    // right arrow pressed
    player.dx = player.speed;
  } else { // If the player is not pressing one of the two keys up there, start slowing down the movement.
    if (player.dx > 0) {
      //If the player's direction is away from the 0 axis (left side of the screen), slowly move the number down by the friction value.
      //The game loop will keep calling the movement function and decrement every frame. 
      player.dx -= friction;
      if(player.dx < threshold){ //If the player's movement is less than the 
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