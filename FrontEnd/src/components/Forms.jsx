import { StldBody } from "./styles/Global";
import {
  MainContainer,
  PrimaryContainer,
  Heading1,
  InputField,
  FormField,
  ContentBox,
} from "./styles/Forms";
import FormsInput from "./FormsInput";
import FormsPreview from "./FormsPreview";
import { createContext, useState } from "react";
import { useEffect, useContext } from "react";
import { ListOfForms } from "./arrays/ListOfForms";
import Card from "./Card";
import { FormContext } from "./DataProvider";
import { loginContext } from "./App";
import {
  getUserDataAll,
  ACCESS_TOKEN,
  tranformFromUserCollegeData,
  tranformFromUserParentData,
  tranformFromUserData,
  getUserData,
  getCollegeFormData,
  getParentFormData,
} from "../DataFetchUtils";

// export const FormContext = createContext();
// export const ShouldPDFContext = createContext();
// export const UploadDataContext = createContext();

function Forms() {
  // const [PDFUpdate, setPDFUpdate] = useState(false);
  // const [formData, setFormData] = useState({
  //   studentName: "",
  //   fathersName: "",
  //   // studentlastName: "",
  //   studentNumber: "",
  //   studentDOB: "",
  //   studentPOB: "",
  //   studentPermanentAdd: "",
  //   fathersName: "",
  //   fathersOccupation: "",
  //   fathersNumber: "",
  //   fathersWorkAdd: "",
  //   fathersEmail: "",
  //   mothersName: "",
  //   mothersOccupation: "",
  //   mothersNumber: "",
  //   localGuardiansName: "",
  //   localGuardiansOccupation: "",
  //   localGuardiansNumber: "",
  //   localGuardiansWorkAdd: "",
  //   localGuardiansEmail: "",
  //   localGuardiansAdd: "",
  //   // branch: "",
  //   secondaryYear: "",
  //   secondaryCollegeNameAndPlace: "",
  //   secondaryUniversityOrBoard: "",
  //   secondaryDivisionAndPercentage: "",
  //   seniorSecondaryYear: "",
  //   seniorSecondaryCollegeNameAndPlace: "",
  //   seniorSecondaryUniversityOrBoard: "",
  //   seniorSecondaryDivisionAndPercentage: "",
  //   diplomaYear: "",
  //   diplomaCollegeNameAndPlace: "",
  //   diplomaUniversityOrBoard: "",
  //   diplomaDivisionAndPercentage: "",
  //   graduationYear: "",
  //   graduationCollegeNameAndPlace: "",
  //   graduationUniversityOrBoard: "",
  //   graduationDivisionAndPercentage: "",
  // });
  let formcontext = useContext(FormContext);
  let formDataToSend = formcontext.formDataToSend;

  // useEffect(async () => {
  //   if (PDFUpdate) {
  //     let UploadData = {};
  //     for (let key in formData) {
  //       if (formData[key] !== "") {
  //         UploadData[key] = formData[key];
  //       }
  //     }
  //     // await postData("http://localhost:4000/", UploadData)
  //   }
  // }, [PDFUpdate]);

  // async function postData(url = "http://localhost:4000/", data = {}) {
  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
  let logInValue = useContext(loginContext);
  let FormData = useContext(FormContext);

  useEffect(async () => {
    // console.log(logInValue.login);
    if (logInValue.login) {
      // let userData = await getUserData();
      // let userCollegeData = await getCollegeFormData()

      try {
        let datas = await Promise.all([
          getUserData(),
          getCollegeFormData(),
          getParentFormData(),
        ]);
        // console.log(datas);
        let usrDataFrom = {};
        let usrParentDataFrom = {};
        let clgDataFrom = {};
        if (datas[0].error == null) {
          usrDataFrom = tranformFromUserData(datas[0].data.userData);
        }
        if (datas[1].error == null) {
          clgDataFrom = tranformFromUserCollegeData(
            datas[1].data.collegeFormData
          );
        }
        if (datas[2].error == null) {
          usrParentDataFrom = tranformFromUserParentData(datas[2].data);
        }
        // console.log("here");
        // console.log(usrDataFrom);
        // console.log(usrParentDataFrom);
        // console.log(clgDataFrom);
        FormData.setFormData({
          ...FormData.formData,
          ...clgDataFrom,
          ...usrDataFrom,
          ...usrParentDataFrom,
        });
        FormData.setFormDataToSend({
          ...FormData.formData,
          ...clgDataFrom,
          ...usrDataFrom,
          ...usrParentDataFrom,
        });
      } catch (e) {
        // console.log(e);
      }
    }
  }, []);

  return (
    <>
      <StldBody>
        {/* <FormContext.Provider
          value={{ formData, setFormData, formDataToSend, setFormDataToSend }}>
          <ShouldPDFContext.Provider value={{ PDFUpdate, setPDFUpdate }}> */}
        <MainContainer>
          <PrimaryContainer>
            <Heading1>Admission Form</Heading1>
            <ContentBox>
              <InputField>
                <FormsInput />
              </InputField>
              <FormField>
                <FormsPreview
                // formDataToSend={formDataToSend}
                />
              </FormField>
            </ContentBox>
          </PrimaryContainer>
        </MainContainer>
        {/* </ShouldPDFContext.Provider>
        </FormContext.Provider> */}
      </StldBody>
    </>
  );
}

export default Forms;
