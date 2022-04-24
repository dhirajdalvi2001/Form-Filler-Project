import GlobalStyles, { StldBody } from "./styles/Global";
import {
  MainContainer,
  PrimaryContainer,
  Heading1,
  SecondaryContainer,
} from "./styles/Dashboard";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import DashboardInputs from "./DashboardInputs";
import { PersonalInfo } from "./arrays/PersonalInfo";
import { loginContext } from "./App";
import { FormContext } from "./DataProvider";
import {
  getUserDataAll,
  ACCESS_TOKEN,
  tranformFromUserCollegeData,
  tranformFromUserParentData,
  tranformFromUserData,
} from "../DataFetchUtils";

function Dashboard() {
  let navigateTo = useNavigate();
  let logInValue = useContext(loginContext);
  let FormData = useContext(FormContext);

  useEffect(async () => {
    // console.log();
    if (!logInValue.login) {
      navigateTo("/login");
      // if (ACCESS_TOKEN)
    } else {
      let { data } = await getUserDataAll();
      if (data !== null) {
        // console.log("***************************");
        // console.log(data);
        let clgData = data.formData.collegeFormData;
        let usrData = data.userData;
        let parentData = data.parentData;
        // console.log(clgData);
        // console.log(usrData);
        // console.log(parentData);
        let clgDataFrom = tranformFromUserCollegeData(clgData);
        let usrDataFrom = tranformFromUserData(usrData);
        let usrParentDataFrom = tranformFromUserParentData(parentData);
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
        // console.log(clgDataFrom);
        // console.log(usrDataFrom);
        // console.log(usrParentDataFrom);
        // console.log("***************************");
      }
    }
  }, []);

  return (
    <>
      <StldBody>
        <MainContainer>
          <PrimaryContainer>
            <Heading1>
              Dashboard
              <h3>
                Note :- Fill the details and the data will be saved in our
                database so you don't have to fill these everytime
              </h3>
            </Heading1>
            <SecondaryContainer>
              <DashboardInputs />
            </SecondaryContainer>
          </PrimaryContainer>
        </MainContainer>
      </StldBody>
    </>
  );
}

export default Dashboard;
