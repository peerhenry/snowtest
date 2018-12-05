import store from '../store.js'
import update from './update.js'
import draw from './draw.js'

function gameLoop(){
  let ctx = store.getters.context
  const newTime = (new Date()).getTime()
  const dt = newTime - store.getters.gameTime
  store.commit('setGameTime', newTime)
  update(ctx, dt)
  draw(ctx)
}

export default gameLoop