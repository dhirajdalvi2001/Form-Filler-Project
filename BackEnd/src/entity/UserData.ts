import { Date, model, Schema } from "mongoose";

export interface UserData {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  address1?: string;
  address2?: string;
  phoneNum1?: string;
  phoneNum2?: string;
  dateOfBirth?: Date;
  occupation?: string;
}

const UserDataSchema = new Schema<UserData>({
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  address1: { type: String },
  address2: { type: String },
  phoneNum1: { type: String },
  phoneNum2: { type: String },
  dateOfBirth: { type: Date },
  occupation: { type: String },
});

export const UserDataModel = model<UserData>("UserData", UserDataSchema);
