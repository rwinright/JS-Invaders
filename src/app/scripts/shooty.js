const shooty = (player, bulletPool, keyPressed) => {
  if (keyPressed('x')) {
    bulletPool.get({
      x: player.x + 7,
      y: player.y,
      color: 'blue',
      width: 5,
      height: 5,
      dy: -4,
      ttl: Infinity,
    })
  }
  //Track objects that have not expired.
  let b = bulletPool.getAliveObjects();

  //Set the "Time To Live" to 0 to refresh the pool count.
  b.forEach((blt) => {
    if (blt.y <= 0 /*|| blt.collidesWith(player) Change to enemy block later */) {
      blt.ttl = 0;
    }
  })
}

export default shooty