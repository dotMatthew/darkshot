import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  uuid: string;
  name: string;
}

export const UserSchema: Schema = new Schema({
  uuid: String,
  name: String,
});

export default mongoose.model<IUser>("User", UserSchema, "Users");
//export const UserModel = MongoConnection.model<IUser>("User", UserSchema, "Users");