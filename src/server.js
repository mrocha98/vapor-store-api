const app = require('./app')

const port = process.env.PORT || 3333

console.log('========\tVAPOR STORE\t========')
console.log(`Server listening on...\t${port}`)

app.listen(port)
