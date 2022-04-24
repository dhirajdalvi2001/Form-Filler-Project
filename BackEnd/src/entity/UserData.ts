import { Date, model, Schema } from "mongoose";

export interface UserData {
  Name?: string;
  email?: String;
  address1?: string;
  workAddress?: string;
  phoneNum1?: string;
  phoneNum2?: string;
  dateOfBirth?: Date;
  occupation?: string;
  placeOfBirth?: string;
}

export const UserDataSchema = new Schema<UserData>({
  Name: { type: String },
  email: { type: String },
  address1: { type: String },
  workAddress: { type: String },
  phoneNum1: { type: String },
  phoneNum2: { type: String },
  dateOfBirth: { type: Date },
  occupation: { type: String },
  placeOfBirth: { type: String },
});

export const UserDataModel = model<UserData>("UserData", UserDataSchema);
