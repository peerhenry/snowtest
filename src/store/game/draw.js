import store from '../store.js'

function clearCanvas(ctx){
  let canvas = ctx.canvas
  ctx.fillStyle = 'black'
  ctx.globalAlpha = 1;
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawBackGround(ctx){
  // gradient
  var grd = ctx.createLinearGradient(0,1080,0,0);
  grd.addColorStop(0,"black");
  grd.addColorStop(1,"#1b293f");
  ctx.globalAlpha = 1;
  ctx.fillStyle = grd;
  let canvas = ctx.canvas
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  /* ground
  ctx.fillStyle = "#222";
  ctx.fillRect(0, 2*canvas.height/3, canvas.width, canvas.height)
  */

  // misty overlay
  ctx.globalAlpha = store.getters.snowSettings.mist;
  ctx.fillStyle = store.getters.snowSettings.mistColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSnowFlakes(ctx){
  const flakes = store.getters.snowFlakes
  flakes.forEach(flake => {
    ctx.globalAlpha = flake.alpha
    ctx.fillStyle = store.getters.snowSettings.snowColor
    ctx.beginPath()
    ctx.arc(flake.x, flake.y, flake.radius, 0, 2*Math.PI)
    ctx.fill()
  });
}

function draw(ctx){
  clearCanvas(ctx)
  drawBackGround(ctx)
  drawSnowFlakes(ctx)
}

export default draw