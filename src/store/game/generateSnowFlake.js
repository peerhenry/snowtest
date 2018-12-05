import store from '../store.js'

function genFlakeDepth(randomForZ){
  const snowSettings = store.state.snowSettings
  return store.getters.flakeDiffDist*randomForZ + snowSettings.flakeMinDist
}

function calculateFlakeRadius(randomForZ){
  const snowSettings = store.state.snowSettings
  return snowSettings.flakeMaxRad - store.getters.flakeDiffRad*randomForZ
}

function calculateAlpha(randomForZ){
  const snowSettings = store.state.snowSettings
  return snowSettings.flakeMinAlpha + (store.getters.flakeDiffAlpha*randomForZ)
}

function generateFlake(){
  const rand = Math.random()
  const randExp = Math.pow(rand, 16);
  let randomForZ = 1 - randExp;
  let newFlake = {
    phase: 2*Math.PI * Math.random(), // so they don't wiggle in harmony
    x: Math.random()*store.getters.canvasWidth,
    y: Math.random()*store.getters.canvasHeight,
    z: genFlakeDepth(randomForZ),
    radius: calculateFlakeRadius(randomForZ),
    alpha: calculateAlpha(randomForZ),
    color: '#eee'
  }
  return newFlake
}

export default generateFlake