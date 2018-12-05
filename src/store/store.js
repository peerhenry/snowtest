import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const defaults = {
  flakeMinDist: 5,
  flakeMaxDist: 10,
  flakeMinRad: 1,
  flakeMaxRad: 15,
  flakeMinAlpha: 0.3,
  flakeMaxAlpha: 0.8,
  fallSpeed: 120,
  wiggleStrength: 1/4,
  wiggleSpeed: 2,
  windStrength: 1/2,
  windSpeed: 2,
  mist: 0.17,
  flakeCount: 1500,

  snowColor: "#eee",
  mistColor: "#ccc"
}

const state = {
  snowFlakes: [],
  snowSettings: Object.assign({}, defaults),
  context: null,
  gameTime: 0
}

const getters = {
  flakeDiffDist: ({ snowSettings }) => ( snowSettings.flakeMaxDist - snowSettings.flakeMinDist ),
  flakeDiffRad: ({ snowSettings }) =>  ( snowSettings.flakeMaxRad - snowSettings.flakeMinRad ),
  flakeDiffAlpha: ({ snowSettings }) =>  ( snowSettings.flakeMaxAlpha - snowSettings.flakeMinAlpha ),
  canvasWidth: ( state ) => state.context.canvas.width,
  canvasHeight: ( state ) => state.context.canvas.height,
  context: (state) => state.context,
  gameTime: (state) => state.gameTime,
  snowFlakes: (state) => state.snowFlakes,
  snowSettings: (state) => state.snowSettings
}

const mutations = {
  setContext: ( state, ctx ) => state.context = ctx,
  setGameTime: ( state, time ) => state.gameTime = time,

  setMinDistance: ( state, val ) => state.snowSettings.flakeMinDit = val,
  setMaxDistance: ( state, val ) => state.snowSettings.flakeMaxDist = val,
  setMinRadius: ( state, val ) => state.snowSettings.flakeMinRad = val,
  setMaxRadius: ( state, val ) => state.snowSettings.flakeMaxRad = val,
  setMinAlpha: ( state, val ) => state.snowSettings.flakeMinAlpha = val,
  setMaxAlpha: ( state, val ) => state.snowSettings.flakeMaxAlpha = val,
  setFallSpeed: ( state, val ) => state.snowSettings.fallSpeed = val,
  setWiggleStrength: ( state, val ) => state.snowSettings.wiggleStrength = val,
  setWiggleSpeed: ( state, val ) => state.snowSettings.wiggleSpeed = val,
  setWindStrength: ( state, val ) => state.snowSettings.windStrength = val,
  setWindSpeed: ( state, val ) => state.snowSettings.windSpeed = val,
  setMist: ( state, val ) => state.snowSettings.mist = val,
  setFlakeCount: ( state, val ) => state.snowSettings.flakeCount = val,

  reset: (state) => state.snowSettings = Object.assign({}, defaults),

  setSnowColor: ( state, val ) => state.snowSettings.snowColor = val,
  setMistColor: ( state, val ) => state.snowSettings.mistColor = val,
}

export default new Vuex.Store({
  state,
  getters,
  mutations
})