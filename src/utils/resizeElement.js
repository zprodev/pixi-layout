/**
 * Fix the size of the HTMLElement. 
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {number} width 
 * @param {number} height 
 */
export default function(canvas, width, height) {
  const CANVAS_RATIO = width / height;

  const resize = () => {
    let w, h;
    if (window.innerWidth / window.innerHeight >= CANVAS_RATIO) {
      w = window.innerHeight * CANVAS_RATIO;
      h = window.innerHeight;
    } else {
      w = window.innerWidth;
      h = window.innerWidth / CANVAS_RATIO;
    }
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    // Fitting when iOS menu bar is displayed.
    window.scrollTo(0, 0);
  }

  // Initial resize.
  resize();

  // Resize by receiving window event.
  let resizeTimerId = null;
  window.onresize = () => {
    if (resizeTimerId !== null) {
      clearTimeout(resizeTimerId);
    }
    resizeTimerId = setTimeout(() => {
      resize();
      resizeTimerId = null;
    }, 200);
  };
}
