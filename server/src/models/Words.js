module.exports = (sequelize, DataTypes) => {
  const Word = sequelize.define('Word', {
    word: {
      type: DataTypes.STRING,
      unique: true
    }
  })
  return Word
}
