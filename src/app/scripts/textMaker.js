

const textMaker = (context, x, y, text, size) => {
  
  if(!size){
    size = 10;
  }
  context.fillStyle = 'white';
  context.font = `${size}px Courier New`;
  context.fillText(text, x, y);
}

export default textMaker;