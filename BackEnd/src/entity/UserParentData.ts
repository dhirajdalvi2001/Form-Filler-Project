import { UserData, UserDataModel } from "./UserData";
import { Date, model, Schema } from "mongoose";

export interface UserParentData {
  motherData?: UserData;
  fatherData?: UserData;
  gardianData?: UserData;
}

const UserParentDataSchema = new Schema<UserParentData>({
  motherData: { type: UserDataModel },
  fatherData: { type: UserDataModel },
  gardianData: { type: UserDataModel },
});

export const UserParentDataModel = model<UserParentData>(
  "UserParentData",
  UserParentDataSchema
);
