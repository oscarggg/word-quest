<template>
<div class="game-board">
  <div v-for="(letter, index) in letters" :key="index" class="letter-circle"
  :class="{ 'used': usedIndexes.includes(index)}" @click="addToWord(index)">
  {{ letter }}
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      letters: [], // Example letters
      usedIndexes: [] // track used letters by their indexes
    }
  },
  created () {
    this.letters = this.generateLetters()
  },
  methods: {
    generateLetters () {
      const vowels = ['A', 'E', 'I', 'O', 'U']
      const consonants = 'BCDFGHJKLMNPQRSTVWXYZ'.split('')
      let letters = []
      let allLetters = vowels.concat(consonants)

      // Ensure at least one vowel
      const vowel = vowels[Math.floor(Math.random() * vowels.length)]
      letters.push(vowel)
      allLetters = allLetters.filter(letter => letter !== vowel)

      // Generate the rest of the letters ensuring uniqueness
      while (letters.length < 5) {
        const nextLetter = allLetters[Math.floor(Math.random() * allLetters.length)]
        letters.push(nextLetter)
      }

      // Shuffle the array to mix vowels and consonants
      return letters.sort(() => Math.random() - 0.5)
    },
    addToWord (index) {
      if (!this.usedIndexes.includes(index)) {
        this.usedIndexes.push(index)
        this.$emit('wordCreated', this.letters[index]) // Emit the letter to the parent
      }
    }
  }
}
</script>

<style scoped>
.game-board {
border-style: dashed;
display: flex;
justify-content: space-around;
align-items: center;
height: 100%;
width: 100%;
padding: 20px;
}

.letter-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #FFC107;
  color: white;
  font-size: 24px;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
}
.letter-circle.used {
  /* Style for used letters, e.g., making them less visible */
  opacity: 0.5;
  pointer-events: none;
}
</style>
