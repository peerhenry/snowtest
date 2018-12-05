import store from '../store.js'
import generateFlake from './generateSnowFlake.js'

function checkCanvasResize(ctx, dt){
  if(ctx.canvas.width != window.innerWidth || ctx.canvas.height != window.innerHeight)
  {
    // console.log('updating canvas')
    ctx.canvas.width  = window.innerWidth
    ctx.canvas.height = window.innerHeight
  }
}

function getWind(flake, t){
  const snowSettings = store.getters.snowSettings
  const tt = (flake.z > snowSettings.flakeMinDist + store.getters.flakeDiffDist/2) ? t : t-1500;
  let p = tt*snowSettings.windSpeed;
  return  (Math.cos(p/7000) + Math.sin(p/6500))*snowSettings.windStrength;
}

function getWiggle(t){
  const snowSettings = store.getters.snowSettings
  return (Math.sin(t*snowSettings.wiggleSpeed) + Math.cos((t/2)*snowSettings.wiggleSpeed))*snowSettings.wiggleStrength;
}

function updateFlakePosition(dt, flake){
  const snowSettings = store.getters.snowSettings
  const time = store.getters.gameTime
  let wind = getWind(flake, time)
  let wiggle = getWiggle(time/500 + flake.phase)
  let distStrength = snowSettings.flakeMaxDist/flake.z
  flake.x += (wiggle*distStrength + wind)*distStrength
  flake.y += (dt/1000)*snowSettings.fallSpeed*distStrength
}

function interpolate(a, b, amount){
  return (1-amount)*a + amount*b
}

function updateFlakeZParams(flake){
  // todo: optimization
  // add a flag to store that is true only when a setting has been changed
  const settings = store.getters.snowSettings
  let zFrac = (flake.z - settings.flakeMinDist)/store.getters.flakeDiffDist
  flake.alpha = interpolate(settings.flakeMinAlpha, settings.flakeMaxAlpha, zFrac)
  flake.radius = interpolate(settings.flakeMaxRad, settings.flakeMinRad, zFrac)
}

function containFlake(flake){
  if(flake.y > store.getters.canvasHeight + flake.radius) flake.y -= (store.getters.canvasHeight + 2*flake.radius)
  if(flake.x > store.getters.canvasWidth + flake.radius) flake.x -= (store.getters.canvasWidth + 2*flake.radius)
  else if(flake.x + flake.radius < 0) flake.x += store.getters.canvasWidth + 2*flake.radius
}

function updateFlake(dt, flake){
  updateFlakePosition(dt, flake)
  updateFlakeZParams(flake)
  containFlake(flake)
}

function updateSnow(dt){
  const flakes = store.getters.snowFlakes

  while(flakes.length > store.state.snowSettings.flakeCount) flakes.pop()
  while(flakes.length < store.state.snowSettings.flakeCount){
    let newFlake = generateFlake()
    flakes.push(newFlake)
  }

  flakes.forEach(flake => {
    updateFlake(dt, flake)
  })
}

function update(ctx, dt){
  checkCanvasResize(ctx, dt)
  updateSnow(dt)
}

export default update