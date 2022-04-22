import { Schema, model } from "mongoose";
import { Int32 } from "mongodb";
import { UserData, UserDataSchema } from "./UserData";
export interface User {
  email: string;
  password: string;
  userData?: UserData;
  parentData?: Schema.Types.ObjectId;
  formData?: Schema.Types.ObjectId;
}

const UserSchema = new Schema<User>({
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  userData: { type: UserDataSchema },
  parentData: { type: Schema.Types.ObjectId, ref: "UserParentData" },
  formData: { type: Schema.Types.ObjectId, ref: "FormData" },
});

export const UserModel = model<User>("User", UserSchema);
