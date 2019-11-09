const movement = (keyPressed, sprite) =>{
  //movement
  if (keyPressed('left')){
    sprite.x -= sprite.speed;
  } else if (keyPressed('right')) {
    // right arrow pressed
    sprite.x += sprite.speed;
  }
  if (keyPressed('up')) {
    // up arrow pressed
    sprite.y -= sprite.speed;
  } else if (keyPressed('down')) {
    // down arrow pressed
    sprite.y += sprite.speed;
  }
}

export default movement;