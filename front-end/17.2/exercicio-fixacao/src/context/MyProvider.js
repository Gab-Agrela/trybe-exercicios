import { useState } from "react";
import { FormContext } from "./MyContext";

export default function Provider({children}) {
    const [state, setState] = useState({
        name: '',
        age: '',
        city: '',
        subject: '',
    });

    return(
        <FormContext.Provider value={{state, setState}}>
            {children}
        </FormContext.Provider>

    )
};