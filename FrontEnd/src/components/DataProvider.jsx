import { useState, createContext, useEffect } from "react";

export const FormContext = createContext();
export const ShouldPDFContext = createContext();
export const UploadDataContext = createContext();

export const DataProvider = ({ children }) => {
  const [PDFUpdate, setPDFUpdate] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    fathersName: "",
    // studentlastName: "",
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
    localGuardiansName: "",
    localGuardiansOccupation: "",
    localGuardiansNumber: "",
    localGuardiansWorkAdd: "",
    localGuardiansEmail: "",
    localGuardiansAdd: "",
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
  });
  const [formDataToSend, setFormDataToSend] = useState({
    studentName: "",
    fathersName: "",
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
    localGuardiansName: "",
    localGuardiansOccupation: "",
    localGuardiansNumber: "",
    localGuardiansWorkAdd: "",
    localGuardiansEmail: "",
    localGuardiansAdd: "",
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
  });

  const setStatesDefault = () => {
    let newMap = {};
    for (let i in formData) {
      newMap[i] = "";
    }
    setFormData({ ...newMap });
    setFormDataToSend({ ...newMap });
  };

  useEffect(() => {
    if (JSON.stringify(formData) === JSON.stringify(formDataToSend)) {
      setFormDataToSend({
        ...formData,
      });
    }
  }, [formData]);

  //   useEffect(async () => {
  //     if (PDFUpdate) {
  //       let UploadData = {};
  //       for (let key in formData) {
  //         if (formData[key] !== "") {
  //           UploadData[key] = formData[key];
  //         }
  //       }
  //       // await postData("http://localhost:4000/", UploadData)
  //     }
  //   }, [PDFUpdate]);
  // console.log(formDataToSend);
  return (
    <>
      <FormContext.Provider
        value={{
          formData,
          setFormData,
          formDataToSend,
          setFormDataToSend,
          setStatesDefault,
        }}>
        <ShouldPDFContext.Provider value={{ PDFUpdate, setPDFUpdate }}>
          {children}
        </ShouldPDFContext.Provider>
      </FormContext.Provider>
    </>
  );
};
