import { Schema, model } from "mongoose";
import { Int32 } from "mongodb";
import { UserData } from "./UserData";
export interface User {
  email: string;
  password: string;
  authCount: number;
  userData?: Schema.Types.ObjectId;
  parentData?: Schema.Types.ObjectId;
  formData?: Schema.Types.ObjectId;
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  authCount: { type: Number, required: true, default: 0 },
  userData: { type: Schema.Types.ObjectId, ref: "UserData" },
  parentData: { type: Schema.Types.ObjectId, ref: "UserParentData" },
  formData: { type: Schema.Types.ObjectId, ref: "FormData" },
});

export const UserModel = model<User>("User", UserSchema);
