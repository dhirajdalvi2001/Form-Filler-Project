import { PersonalInfo } from "./arrays/PersonalInfo";
import { FathersInfo } from "./arrays/FathersInfo";
import { MothersInfo } from "./arrays/MothersInfo";
import { SecondaryInfo } from "./arrays/SecondaryInfo";
import { SeniorSecondaryInfo } from "./arrays/SeniorSecondaryInfo";
import { DiplomaInfo } from "./arrays/DiplomaInfo";
import { GraduationInfo } from "./arrays/GraduationInfo";
import { InputMain, Inputs } from "./styles/Forms";
import Input from "./Input";

function FormsInput() {
    function createInputContainer(e) {
        return (
            <Input 
            key={e.id}
            tag={e.tag}
            name={e.name}
            value={e.value}
            type={"text"}
            className={"inputField"}
            placeholder={e.placeholder}
            autoComplete={"off"}
            />
        );
    }
    return (
        <form>
          <InputMain>
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

            {/* <Inputs>
              <h2 className="heading2">Extra Info:</h2>
              {/* <InputContainer>
              <h3 className="heading3">Branch</h3>
              <select id="branch" name="branch">
                <option value="civil">BE in Civil Engineering</option>
                <option value="mechanical">BE in Mechanical Engineering</option>
                <option value="computer">BE in Computer Engineering</option>
              </select>
              </InputContainer> */}
            {/* </Inputs> */}

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
          </InputMain>
        </form>
    );
}

export default FormsInput;