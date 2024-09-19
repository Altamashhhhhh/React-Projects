const mongoose = require("mongoose")

const connection = mongoose.connect(process.env.DATABASE).then(()=>console.log('DATA BASE IS SUCCESSFULLY CONNECTED')).catch(error=>{
    console.log('ERROR WHILE CONNECTING DATABASE', error.message)
})

module.exports = connection