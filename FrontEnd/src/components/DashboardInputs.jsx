import { PersonalInfo } from "./arrays/PersonalInfo";
import { FathersInfo } from "./arrays/FathersInfo";
import { MothersInfo } from "./arrays/MothersInfo";
import { LocalGuardiansInfo } from "./arrays/LocalGuardianInfo";
import { SecondaryInfo } from "./arrays/SecondaryInfo";
import { SeniorSecondaryInfo } from "./arrays/SeniorSecondaryInfo";
import { DiplomaInfo } from "./arrays/DiplomaInfo";
import { GraduationInfo } from "./arrays/GraduationInfo";
import { InputMain, Inputs } from "./styles/Dashboard";
import Input from "./Input";
import { useContext } from "react";
import { Buttons } from "./styles/Home";
import { DownloadButton } from "./styles/Forms";
import { FormContext } from "./DataProvider";
import {
  tranformToParentDataStruct,
  tranformToUserCollegeDataStruct,
  tranformToUserDataStruct,
  tranformFromUserCollegeData,
  tranformFromUserData,
  tranformFromUserParentData,
  updateCollegeFormData,
  updateParentFormData,
  updateUserData,
} from "../DataFetchUtils";

function DashboardInputs() {
  let formcontext = useContext(FormContext);
  function createInputContainer(e) {
    // let val = formcontext.formDataToSend[e.name];
    // console.log(val);
    return (
      <Input
        key={e.id}
        tag={e.tag}
        name={e.name}
        // value={val}
        type={"text"}
        className={"inputField"}
        placeholder={e.placeholder}
        autoComplete={"off"}
        // onChange={(e) => console.log(e.target.value)}
      />
    );
  }
  return (
    <InputMain>
      <form>
        <Inputs>
          <h2 className="heading2">Personal Info:</h2>
          {PersonalInfo.map(createInputContainer)}
        </Inputs>

        <Inputs>
          <h2 className="heading2">Father's Info:</h2>
          {FathersInfo.map(createInputContainer)}
        </Inputs>

        <Inputs>
          <h2 className="heading2">Mother's Info:</h2>
          {MothersInfo.map(createInputContainer)}
        </Inputs>

        <Inputs>
          <h2 className="heading2">Local Guardian's Info:</h2>
          {LocalGuardiansInfo.map(createInputContainer)}
        </Inputs>

        <Inputs>
          <h2 className="heading2">Secondary Info:</h2>
          {SecondaryInfo.map(createInputContainer)}
        </Inputs>

        <Inputs>
          <h2 className="heading2">Senior Secondary Info:</h2>
          {SeniorSecondaryInfo.map(createInputContainer)}
        </Inputs>

        <Inputs>
          <h2 className="heading2">Diploma Info:</h2>
          {DiplomaInfo.map(createInputContainer)}
        </Inputs>

        <Inputs>
          <h2 className="heading2">GRADUATION Info:</h2>
          {GraduationInfo.map(createInputContainer)}
        </Inputs>
      </form>
      <DownloadButton
        onClick={async () => {
          // console.log(formcontext.formDataToSend);
          // console.log(formcontext.formData);
          let data = formcontext.formDataToSend;
          let userData = tranformToUserDataStruct(data);
          let userParentData = tranformToParentDataStruct(data);
          let userCollegeData = tranformToUserCollegeDataStruct(data);
          let res1 = await updateCollegeFormData(userCollegeData);
          let res2 = await updateParentFormData(userParentData);
          let res3 = await updateUserData(userData);
          if (
            res1.error !== null ||
            res2.error !== null ||
            res3.error !== null
          ) {
            alert("Error occured please retry");
          }
          // console.log(res1);
          // console.log(res2);
          // console.log(res3);

          // console.log("-----------------------------------------------");
          // console.log(d);
          // console.log(a);
          // console.log(b);
          // console.log(c);
          // let e = tranformFromUserCollegeData(c);
          // let f = tranformFromUserData(a);
          // let g = tranformFromUserParentData(b);
          // console.log(e);
          // console.log(f);
          // console.log(g);
          console.log("-----------------------------------------------");
        }}>
        Save
      </DownloadButton>
    </InputMain>
  );
}

export default DashboardInputs;
