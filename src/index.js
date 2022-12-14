const app = require('./app')
require('dotenv').config()
const { PORT } = process.env

app.listen(PORT || 3001, () => console.log(`Server listening on port ${PORT || 3001}`))
