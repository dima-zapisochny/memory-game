import Vue from 'vue'
import Vuex from 'vuex'
import { MUTATION } from './mutations-types'

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
    [MUTATION.CHANGE_MOVES_IN_STORE] (state) {
      state.moves += 1
    },
    [MUTATION.CHANGE_MOVES_NEW_GAME] (state) {
      state.moves = 0
    }
  },
  getters: {
    cards: state => {
      return state.cards
    },
    moves: state => {
      return state.moves
    }
  }
})
