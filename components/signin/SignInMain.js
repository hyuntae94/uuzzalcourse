import { useState } from "react"

import SignIn1 from "./SignIn1.js";
import SignIn2 from "./SignIn2.js";
import SignIn3 from "./SignIn3.js";

export default function SingUpMain({closeSignIn}){
    
    const [stage, setStage] = useState(1);

    const nextStage = () => {
        if (stage === 1) setStage(2);
        else if (stage === 2) setStage(3);
    }
    
    if(stage === 1) return <SignIn1 closeSignIn={closeSignIn} nextStage={nextStage}/>
    else if (stage === 2) return <SignIn2 closeSignIn={closeSignIn} nextStage={nextStage}/>
    else if (stage === 3) return <SignIn3 closeSignIn={closeSignIn}/>
}