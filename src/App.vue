<template>
  <div id="app">
    <Header
      :key="componentKey"
      @newGame="newGame"
      @deleteModal="deleteModal"
    />
    <Field
      :key="componentKey"
    />
    <Modal
      v-if="modal"
    />
  </div>
</template>

<script>

import Field from './components/field/Field'
import Header from './components/Header'
import Modal from './components/Modal'

export default {
  name: 'App',
  data () {
    return {
      componentKey: 0,
      modal: true
    }
  },
  components: {
    Field,
    Header,
    Modal
  },
  methods: {
    newGame () {
      this.componentKey += 1
    },
    deleteModal () {
      this.modal = !this.modal
    }
  }
}
</script>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
