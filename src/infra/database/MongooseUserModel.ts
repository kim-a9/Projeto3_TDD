import { Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: {type: String, required: true},
    login:{type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password:{type: String, required: true},
    id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

});

export const UserModel = model('User', userSchema);