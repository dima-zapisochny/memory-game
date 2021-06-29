<template>
  <div class="field">
    <Card
      v-for="(card, index) in randomList(cards)"
      :key="card.id"
      :index="index"
      :name="card.name"
      @flipCard="flipCard"
    />
  </div>
</template>

<script>
import Card from './Card'
import { mapGetters } from 'vuex'
export default {
  name: 'Field',
  data () {
    return {
      identicalCards: [],
      moves: 0
    }
  },
  components: {
    Card
  },
  computed: {
    ...mapGetters({
      cards: 'CARDS'
    })
  },
  methods: {
    randomList (array) {
      let currentIndex = array.length
      const myRandomizedList = array.slice(0)
      while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        const temporaryValue = myRandomizedList[currentIndex]
        myRandomizedList[currentIndex] = myRandomizedList[randomIndex]
        myRandomizedList[randomIndex] = temporaryValue
      }
      return myRandomizedList
    },
    flipCard ({ element, name }) {
      element.classList.add('active')
      const card = {
        name,
        element
      }
      this.identicalCards.push(card)
      this.comparisonCards()
    },
    comparisonCards () {
      if (this.identicalCards.length === 2) {
        if (this.identicalCards[0].name === this.identicalCards[1].name) {
          this.identicalCards.forEach((card) => {
            card.element.classList.add('done')
          })
          this.identicalCards = []
        } else {
          setTimeout(() => {
            this.identicalCards.forEach((card) => {
              card.element.classList.remove('active')
            })
            this.identicalCards = []
          }, 1500)
        }
        this.countMoves()
      }
    },
    countMoves () {
      this.moves += 1
      console.log(this.moves)
    }
  }
}
</script>

<style lang="scss" scoped>

.field {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 620px;
  height: 620px;
  padding: 7px;
  border: #2c3e50 5px solid;
  border-radius: 10px;
}

</style>
