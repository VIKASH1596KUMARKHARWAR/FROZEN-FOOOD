const mongoose = require('mongoose')


mongoose.connect('mongodb+srv://amitsbz1596:vikash1596@cluster0.vbkxe.mongodb.net/myDatabaseName', { useNewUrlParser: true, useUnifiedTopology: true })

    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db