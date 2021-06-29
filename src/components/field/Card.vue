<template>
  <div class="card" @click="flipCard">
    <div class="front_side"></div>
    <div class="back_side"><span>{{ name }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    index: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    flipCard (event) {
      const name = this.name
      const element = event.path[1]
      this.$emit('flipCard', { element, name })
    }
  }
}
</script>

<style scoped>

.card {
  width: 150px;
  height: 150px;
  position: relative;
  perspective: 1000px;
  border: 2px #fff solid;
  cursor: pointer;
  z-index: 10;
}
.front_side, .back_side {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  backface-visibility: hidden;
  border-radius: 10px;
}
.front_side {
  background-color: #008b8b;
}
.back_side {
  background-color: #BDBDBD;
  transform: rotateY(180deg);
}

.active .front_side {transform: rotateY(180deg);}
.active .back_side {transform: rotateY(360deg);}

.done {
  transition: 0.1s;
}

.done .back_side {
  background-color: #50baff;
}

</style>
