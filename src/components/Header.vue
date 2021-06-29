<template>
  <header class="head-app">
    <div class="count-moves"><span>MOVES {{ moves }}</span></div>
    <button class="start-button" @click="timer"><span>START</span></button>
    <div class="timer">
      <span>TIME:</span>
      <div class="timer__hours"><span v-if="hours < 10">0</span><span>{{ hours }}</span></div>
      <span>:</span>
      <div class="timer__minutes"><span v-if="minutes < 10">0</span><span>{{ minutes }}</span></div>
      <span>:</span>
      <div class="timer__seconds"><span v-if="seconds < 10">0</span><span>{{ seconds }}</span></div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  data () {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  computed: {
    ...mapGetters({
      moves: 'MOVES'
    })
  },
  methods: {
    timer () {
      setInterval(() => {
        this.seconds += 1
        if (this.seconds > 59) {
          this.seconds = 0
          this.minutes += 1
          if (this.minutes > 59) {
            this.minutes = 0
            this.hours += 1
          }
        }
      }, 1000)
      console.log('start')
    }
  }
}
</script>

<style lang="scss" scoped>

.head-app {
  display: flex;
  justify-content: space-between;
  width: 620px;
  height: 60px;
  margin: 5px;
  padding: 7px;
  border: #2c3e50 5px solid;
  border-radius: 10px;
}

.count-moves {
  margin: auto 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100px;
  height: 40px;
  background-color: #008b8b;
  border-radius: 5px;
  font-weight: bold;
  & span {
    color: #ffffff;
  }
}

.start-button {
  border: none;
  cursor: pointer;
  font-weight: bold;
  margin: auto;
  width: 100px;
  color: #fff;
  background-color: #008b8b;
  border-radius: 5px;
  padding: 11px 15px;
  & span {
    font-size: 16px;
  }
}

.timer {
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  margin: auto 0;
  float: right;
  width: 220px;
  height: 40px;
  & span {
    font-size: 18px;
    font-weight: bold;
  }
  &__hours {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: auto 0;
    border-radius: 5px;
    background-color: #000000;
    width: 40px;
    height: 30px;
    color: #ff0000;
  }
  &__minutes {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: auto 0;
    border-radius: 5px;
    background-color: #000000;
    width: 40px;
    height: 30px;
    color: #ffA500;
  }
  &__seconds {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    margin: auto 0;
    border-radius: 5px;
    background-color: #000000;
    width: 40px;
    height: 30px;
    color: #ffffff;
  }
}

</style>
