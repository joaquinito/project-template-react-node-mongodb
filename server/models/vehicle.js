const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    numberWheels: {
        type: Number,
    }
})

vehicleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle