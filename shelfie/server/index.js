const express = require('express'),
     bodyParser = require('body-parser'),
     ctrl = require('./controller'),
     massive = require('massive')
     require('dotenv').config()

     const app = express()
     app.use(bodyParser.json())
     massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

     app.get('/api/inventory', ctrl.getInv )
     app.post('/api/product', ctrl.addProduct)
     app.delete('/api/product', ctrl.deleteProduct)






     const PORT = 3030;
     app.listen(PORT, () => console.log(`Serendipitous Server Somberity on port ${PORT}`))
