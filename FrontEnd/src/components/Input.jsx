import { InputContainer } from "./styles/Forms";
import { FormContext } from "./Forms";
import { useContext } from "react";
import { ShouldPDFContext } from "./Forms";

function Input(props) {
    const FormData = useContext(FormContext);
    const PDFUpdate = useContext(ShouldPDFContext)
    return (
    <InputContainer>
        <h3 className="heading3">{props.placeholder}</h3>
        <props.tag
            type={props.type}
            name={props.name}
            className={props.className}
            placeholder={props.placeholder}
            autoComplete={props.autoComplete}
            onChange={(e) => {
                FormData.setFormData({
                    ...FormData.formData,
                    [props.name]: e.target.value,
                })
            }}
            onBlur={(e) => {
                FormData.setFormDataToSend({
                    ...FormData.formData,
                })
                PDFUpdate.setPDFUpdate(true);
            }}
        />
    </InputContainer>
    );
}

export default Input;