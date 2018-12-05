import store from '../store.js'
import generateFlake from './generateSnowFlake.js'

function init(){
  const flakeCount = store.state.snowSettings.flakeCount
  for (let index = 0; index < flakeCount; index++) {
    let newFlake = generateFlake()
    store.state.snowFlakes.push(newFlake)
  }
  store.commit( 'setGameTime', (new Date()).getTime() )
}

export default init