import { Schema, model, Types } from "mongoose";

export interface AcadmicRecordData {
  year: String;
  CollegeName: String;
  University: String;
  DivisionOrPercent: String;
}

const AcadmicRecordDataScema = new Schema<AcadmicRecordData>({
  year: { type: String },
  CollegeName: { type: String },
  University: { type: String },
  DivisionOrPercent: { type: String },
});

export interface CollegeFormData {
  opEmail?: String;
  convenienceFacility?: boolean;
  enrollementNumber?: Number;
  hostelFacility?: boolean;
  secondryExam?: AcadmicRecordData;
  seniorSecondryExam?: AcadmicRecordData;
  DiplomeExam?: AcadmicRecordData;
  GraduationExam?: AcadmicRecordData;
  OtherExam?: AcadmicRecordData;
}

export const CollegeFormDataSchema = new Schema<CollegeFormData>({
  opEmail: { type: String },
  convenienceFacility: { type: Boolean },
  enrollementNumber: { type: Number },
  hostelFacility: { type: Boolean },
  secondryExam: { type: AcadmicRecordDataScema },
  seniorSecondryExam: { type: AcadmicRecordDataScema },
  DiplomeExam: { type: AcadmicRecordDataScema },
  GraduationExam: { type: AcadmicRecordDataScema },
  OtherExam: { type: AcadmicRecordDataScema },
});

export const CollegeFormDataModel = model<CollegeFormData>(
  "CollegeFormData",
  CollegeFormDataSchema
);
