import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,

    },

    email: {
        type: String,
        require: true,
        unique: true,

    },

    password: {
        type: String,
        require: true,
        

    },

    avatar: {
        type: String,
        default: "https://tse2.mm.bing.net/th?id=OIP.l7wFjokaGcB5GQ8TkV-hlwHaHK&pid=Api&P=0&h=220"
    },


},{timestamps: true});

const User = mongoose.model('User', userSchema);

export default User;