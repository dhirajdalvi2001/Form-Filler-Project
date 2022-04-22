import {
  CollegeFormData,
  CollegeFormDataModel,
  CollegeFormDataSchema,
} from "./CollegeFormData";
import { Schema, model, Types } from "mongoose";
import { Int32 } from "mongodb";
export interface FormData {
  form?: string;
  collegeFormData?: CollegeFormData;
}

const FormDataSchema = new Schema<FormData>({
  form: { type: String },
  collegeFormData: { type: CollegeFormDataSchema },
});

export const FormDataModel = model<FormData>("FormData", FormDataSchema);
