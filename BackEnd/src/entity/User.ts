import { FormData } from "./Forms/FormData";
import { UserParentData } from "./UserParentData";
import { Schema, model } from "mongoose";
import { Int32 } from "mongodb";
import { UserData, UserDataSchema } from "./UserData";

export interface UserAllData {
  id: string;
  email: string;
  userData?: UserData;
  parentData?: UserParentData;
  formData?: FormData;
}
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
