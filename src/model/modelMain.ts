import mongoose, { Schema, model, connect, Model } from 'mongoose';

const UserSchema = new mongoose.Schema({
    name:String
    
})

const user = mongoose.model("todo",UserSchema);

export default user;