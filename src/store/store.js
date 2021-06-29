import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [
      {
        name: 'Card #1'
      },
      {
        name: 'Card #1'
      },
      {
        name: 'Card #2'
      },
      {
        name: 'Card #2'
      },
      {
        name: 'Card #3'
      },
      {
        name: 'Card #3'
      },
      {
        name: 'Card #4'
      },
      {
        name: 'Card #4'
      },
      {
        name: 'Card #5'
      },
      {
        name: 'Card #5'
      },
      {
        name: 'Card #6'
      },
      {
        name: 'Card #6'
      },
      {
        name: 'Card #7'
      },
      {
        name: 'Card #7'
      },
      {
        name: 'Card #8'
      },
      {
        name: 'Card #8'
      }
    ],
    moves: 0
  },
  mutations: {
    CHANGE_MOVE_IN_STORE (state) {
      state.moves += 1
    }
  },
  actions: {
  },
  getters: {
    CARDS: state => {
      return state.cards
    },
    MOVES: state => {
      return state.moves
    }
  },
  modules: {
  }
})
