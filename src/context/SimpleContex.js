import {createContext} from "react";

const SimpleContext = createContext({
    persons:[] ,
    person: "",
    handleDeletePerson:()=>{},
    handleNameChange:()=>{},
    handleNewPerson:()=>{},
    setperson:()=>{}

});
export default SimpleContext;