import { UserData, UserDataSchema } from "./UserData";
import { Date, model, Schema } from "mongoose";

export interface UserParentData {
  motherData?: UserData;
  fatherData?: UserData;
  gardianData?: UserData;
}

const UserParentDataSchema = new Schema<UserParentData>({
  motherData: { type: UserDataSchema },
  fatherData: { type: UserDataSchema },
  gardianData: { type: UserDataSchema },
});

export const UserParentDataModel = model<UserParentData>(
  "UserParentData",
  UserParentDataSchema
);
