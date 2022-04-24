import { InputContainer } from "./styles/Forms";
import { useContext, useEffect } from "react";
import { FormContext } from "./DataProvider";
import { ShouldPDFContext } from "./DataProvider";
import { UploadDataContext } from "./Forms";

function Input(props) {
  const FormData = useContext(FormContext);
  const PDFUpdate = useContext(ShouldPDFContext);
  //   const UpdateData = useContext(UploadDataContext);
  let value = "";
  useEffect(() => {
    if (FormData.formDataToSend[props.name] != "") {
      value = FormData.formDataToSend[props.name];

      //   console.log(props.name);
      //   console.log("inside");
    }
  }, []);
  // console.log("props");
  // console.log(props);
  return (
    <InputContainer>
      <h3 className="heading3">{props.placeholder}</h3>
      <props.tag
        type={props.type}
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
        value={FormData.formData[props.name]}
        key={props.id}
        // value={
        //   FormData.formDataToSend[props.name] != null
        //     ? FormData.formDataToSend[props.name]
        //     : ""
        // }
        // value={props.value}
        onChange={(e) => {
          FormData.setFormData({
            ...FormData.formData,
            [props.name]: e.target.value,
          });
        }}
        onBlur={(e) => {
          if (
            JSON.stringify(FormData.formData) !==
            JSON.stringify(FormData.formDataToSend)
          ) {
            FormData.setFormDataToSend({
              ...FormData.formData,
            });
            PDFUpdate.setPDFUpdate(true);
            // UpdateData.setUpdateData
          }
        }}
      />
    </InputContainer>
  );
}

export default Input;
