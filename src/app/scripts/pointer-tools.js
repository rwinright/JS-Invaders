

const pointerTools = (context, pointer, canvas) => {

  let pointerxPos, pointeryPos;

  context.fillStyle = 'white';
  context.font = '10px Courier New';
  if (pointer.x > canvas.width / 2) {
    pointerxPos = -35
  } else {
    pointerxPos = 10
  }

  if(pointer.y < 25){
    pointeryPos = 20;
  } else {
    pointeryPos = 0;
  }
  context.fillText(`x:${Math.floor(pointer.x)}`, pointer.x + pointerxPos, (pointer.y) + pointeryPos);
  context.fillText(`y:${Math.floor(pointer.y)}`, pointer.x + pointerxPos, (pointer.y - 10) + pointeryPos);
}

export default pointerTools;