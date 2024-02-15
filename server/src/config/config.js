module.exports = {
  port: 8081,
  db: {
    database: process.env.DB_NAME || 'word_quest',
    user: process.env.DB_USER || 'malandrin',
    password: process.env.DB_PASS || '@Skwurtl2009',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './word-quest-app.sqlite'
    }
  }
}
