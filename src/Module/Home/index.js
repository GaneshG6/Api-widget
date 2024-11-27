import React from "react";
import { Button } from "../../Component";
import { useNavigation } from "../../Hooks";
function Home() {
    const {goTo} = useNavigation()
    return <div className="login-container">
        <div className="d-flex justify0-content-center align-items-center flex-column">
        <h4 className="">{"Hello, Welcome!"}</h4>
        <p className="mb-4">{'Please click login to proceed.'}</p>
    <Button text={"Login"} onClick={()=>{goTo('./login')}}/>
    </div>
    </div>
}export {Home}