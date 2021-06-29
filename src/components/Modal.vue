<template>
  <div class="modal">
    <p class="modal-text">Hello, press START to start the game.</p></div>
</template>

<script>
export default {
  name: 'Modal'
}
</script>

<style scoped>
.modal {
  position: fixed;
  left: calc(50% - 200px);
  top: calc(50% - 150px);
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #ffffff;
  background-color: #025252;
  border: 4px solid #fff;
  border-radius: 5px;
}
</style>
