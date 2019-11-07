const movement = (keyPressed, sprite) =>{
  //movement
  if (keyPressed('left') && sprite.x >= 0){
    sprite.dx = -sprite.speed;
  } else if (keyPressed('right') && sprite.x <= 600 - sprite.width) {
    // right arrow pressed
    sprite.dx = sprite.speed;
  }  else {
    sprite.dx = 0;
  }
  if (keyPressed('up') && (sprite.y >= 300)) {
    // up arrow pressed
    sprite.dy = -sprite.speed;
  } else if (keyPressed('down') && (sprite.y < 450 - sprite.height)) {
    // down arrow pressed
    sprite.dy = sprite.speed;
  } else {
    sprite.dy = 0;
  }
}

export default movement;