<template>
  <div class="home-container">
    <GameBoard @wordCreated="createWord"/>
    <div class="menu">
      <button v-if="!gameStarted" @click="startGame">PLAY</button>
      <button v-else @click="createWord" class="create-button">CREATE</button>
    </div>
  </div>
</template>

<script>
import GameBoard from './GameBoard.vue'

export default {
  components: {
    GameBoard
  },
  data () {
    return {
      gameStarted: false,
      currentWord: ''
    }
  },
  methods: {
    startGame () {
      this.gameStarted = true
    },
    addToCurrentWord (letter) {
      this.currentWord += letter
    },
    createWord () {
      if (this.validateWord(this.currentWord)) {
        console.log('Valid word:', this.currentWord)
      } else {
        console.log('Invalid word:', this.currentWord)
      }
      this.currentWord = '' // Reset current word
      this.gameStarted = false // Optionally reset game state
    },
    validateWord (word) {
      return word.length > 0
    }
  }
}
</script>

<style scoped>
.home-container {
  border: black;
  border-style: double;
  margin: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Ensures content is spaced out vertically */
  align-items: center;
  height: 100vh; /* Full height of the viewport */
  padding: 20px; /* Padding around the container */
}

.menu {
  padding: 30px;
  border: black;
  width: 90%; /* Full width to center the button */
  display: flex;
  justify-content: center;
  align-items: flex-end; /* Aligns the button to the bottom */
  height: 100%; /* Takes full height of its container */
}

button {
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #FFD700; /* Fun button color */
  color: white;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px; /* Margin at the bottom for spacing */
}
.create-button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
