import { Date, model, Schema } from "mongoose";

export interface UserData {
  Name?: string;
  address1?: string;
  address2?: string;
  phoneNum1?: string;
  phoneNum2?: string;
  dateOfBirth?: Date;
  occupation?: string;
}

export const UserDataSchema = new Schema<UserData>({
  Name: { type: String },
  address1: { type: String },
  address2: { type: String },
  phoneNum1: { type: String },
  phoneNum2: { type: String },
  dateOfBirth: { type: Date },
  occupation: { type: String },
});

export const UserDataModel = model<UserData>("UserData", UserDataSchema);
