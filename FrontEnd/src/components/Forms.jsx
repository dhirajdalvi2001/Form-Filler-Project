import { StldBody } from "./styles/Global";
import { MainContainer, PrimaryContainer, Heading1, InputField, FormField, ContentBox } from "./styles/Forms";
import FormsInput from "./FormsInput";
import FormsPreview from "./FormsPreview";
import { createContext, useState } from "react";

export const FormContext = createContext(); 
export const ShouldPDFContext = createContext(); 

  function Forms() {
    const [PDFUpdate, setPDFUpdate] = useState(false)
    const [formData, setFormData] = useState({
      studentName: "",
      studentMiddleName: "",
      studentlastName: "",
      studentNumber: "",
      studentDOB: "",
      studentPOB: "",
      studentPermanentAdd: "",
      fathersName: "",
      fathersOccupation: "",
      fathersNumber: "",
      fathersWorkAdd: "",
      fathersEmail: "",
      mothersName: "",
      mothersOccupation: "",
      mothersNumber: "",
      // branch: "",
      secondaryYear: "",
      secondaryCollegeNameAndPlace: "",
      secondaryUniversityOrBoard: "",
      secondaryDivisionAndPercentage: "",
      seniorSecondaryYear: "",
      seniorSecondaryCollegeNameAndPlace: "",
      seniorSecondaryUniversityOrBoard: "",
      seniorSecondaryDivisionAndPercentage: "",
      diplomaYear: "",
      diplomaCollegeNameAndPlace: "",
      diplomaUniversityOrBoard: "",
      diplomaDivisionAndPercentage: "",
      graduationYear: "",
      graduationCollegeNameAndPlace: "",
      graduationUniversityOrBoard: "",
      graduationDivisionAndPercentage: "",
    })
    const [formDataToSend, setFormDataToSend] = useState({
      studentName: "",
      studentMiddleName: "",
      studentlastName: "",
      studentNumber: "",
      studentDOB: "",
      studentPOB: "",
      studentPermanentAdd: "",
      fathersName: "",
      fathersOccupation: "",
      fathersNumber: "",
      fathersWorkAdd: "",
      fathersEmail: "",
      mothersName: "",
      mothersOccupation: "",
      mothersNumber: "",
      // branch: "",
      secondaryYear: "",
      secondaryCollegeNameAndPlace: "",
      secondaryUniversityOrBoard: "",
      secondaryDivisionAndPercentage: "",
      seniorSecondaryYear: "",
      seniorSecondaryCollegeNameAndPlace: "",
      seniorSecondaryUniversityOrBoard: "",
      seniorSecondaryDivisionAndPercentage: "",
      diplomaYear: "",
      diplomaCollegeNameAndPlace: "",
      diplomaUniversityOrBoard: "",
      diplomaDivisionAndPercentage: "",
      graduationYear: "",
      graduationCollegeNameAndPlace: "",
      graduationUniversityOrBoard: "",
      graduationDivisionAndPercentage: "",
    })
  let fileChange = null;
  let pdfDep = null;
  const hanfleFileInput = (e) => {
    // let file = e.target.files[0];
    // console.log(e.target);
    // console.log(e.target.file);
    // console.log(e.target[0]);
    // console.log(e.target.files);
    fileChange = e;
    return e.target.files[0];
  };

  // useEffect(() => {
  //   pdfDep = fileChange;
  //   console.log("pdfdep" + pdfDep);
  // }, [fileChange]);
  return (
    <>
      <StldBody>
        <FormContext.Provider value={{ formData, setFormData, setFormDataToSend }}>
          <ShouldPDFContext.Provider value={{PDFUpdate, setPDFUpdate}}>
            <MainContainer>
              <PrimaryContainer>
                <Heading1>Forms</Heading1>
                <ContentBox>
                  <InputField>
                    <FormsInput />
                  </InputField>
                  <FormField>
                    <FormsPreview formDataToSend={formDataToSend}/>
                  </FormField>
                </ContentBox>
              </PrimaryContainer>
            </MainContainer>
          </ShouldPDFContext.Provider>
        </FormContext.Provider>
      </StldBody>
    </>
  );
}

export default Forms;
