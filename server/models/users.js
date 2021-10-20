import mongoose from 'mongoose'

const usersSchema = mongoose.Schema({
    userName: String,
    password: String,
    mobileNumber: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const Users = mongoose.model('Users', usersSchema)

export default Users