// src/services/DictionaryService.js

class DictionaryService {
  constructor () {
    this.baseUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
  }

  async validateWord (word) {
    try {
      const response = await fetch(`${this.baseUrl}${word}`)
      const data = await response.json()
      return data.length > 0 && data[0].defs
    } catch (error) {
      console.error('Error validating word:', error)
      return false
    }
  }
}

export default new DictionaryService()
