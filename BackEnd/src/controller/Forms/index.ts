import { CollegeFormData } from "./../../entity/Forms/CollegeFormData";
import express from "express";
import CollegeFormDataRouter from "./CollegeDataFormController";
import ParentDataRouter from "./ParentDataController";

const FormRouter = express.Router();

FormRouter.use("/", CollegeFormDataRouter);
FormRouter.use("/", ParentDataRouter);
export default FormRouter;
