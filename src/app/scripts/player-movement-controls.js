const movement = (keyPressed, sprite, vector) =>{
  //movement
  if (keyPressed('left')){
    vector.x -= sprite.speed;
  } else if (keyPressed('right')) {
    // right arrow pressed
    vector.x += sprite.speed;
  }
  if (keyPressed('up')) {
    // up arrow pressed
    vector.y -= sprite.speed;
  } else if (keyPressed('down')) {
    // down arrow pressed
    vector.y += sprite.speed;
  }

  sprite.x = vector.x;
  sprite.y = vector.y;
}

export default movement;