import { useState } from "react"

import SignUp1 from "./SignUp1.js";
import SignUp2 from "./SignUp2.js";
import SignUp3 from "./SignUp3.js";

export default function SingUpMain({closeSignUp}){
    
    const [stage, setStage] = useState(1);

    const nextStage = () => {
        if (stage === 1) setStage(2);
        else if (stage === 2) setStage(3);
    }
    
    if(stage === 1) return <SignUp1 closeSignUp={closeSignUp} nextStage={nextStage}/>
    else if (stage === 2) return <SignUp2 closeSignUp={closeSignUp} nextStage={nextStage}/>
    else if (stage === 3) return <SignUp3 closeSignUp={closeSignUp}/>
}