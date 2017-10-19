/**
 * Fix the size of the HTMLElement. 
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {number} width 
 * @param {number} height 
 */
export default function(canvas, width, height) {
  const CANVAS_RATIO = width / height;

  let resize = function(){
    if (window.innerWidth / window.innerHeight >= CANVAS_RATIO) {
      var w = window.innerHeight * CANVAS_RATIO;
      var h = window.innerHeight;
    } else {
      var w = window.innerWidth;
      var h = window.innerWidth / CANVAS_RATIO;
    }
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
  }

  resize();
  window.onresize = resize;
}
