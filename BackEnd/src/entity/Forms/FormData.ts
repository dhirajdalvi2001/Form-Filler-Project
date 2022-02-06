import { Schema, model } from "mongoose";
import { Int32 } from "mongodb";
export interface FormData {
  form?: string;
}

const FormDataSchema = new Schema<FormData>({
  form: { type: String },
});

export const FormDataModel = model<FormData>("FormData", FormDataSchema);
