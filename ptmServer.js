const express = require('express')
const app = express()

app.get('https://ryul-k.github.io/Express/hello', (req, res) => res.send('Hello World!'))

app.get('/index.html', (req, res) => res.send('Hello World!'))
