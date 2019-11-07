

const pointerTools = (context, pointer, canvas) => {

  let pointerxPos;

  context.fillStyle = 'white';
  context.font = '10px Courier New';
  if (pointer.x > canvas.width / 2) {
    pointerxPos = -35
  } else {
    pointerxPos = 10
  }
  context.fillText(`x:${Math.floor(pointer.x)}`, pointer.x + pointerxPos, pointer.y);
  context.fillText(`y:${Math.floor(pointer.y)}`, pointer.x + pointerxPos, pointer.y - 10);
}

export default pointerTools;