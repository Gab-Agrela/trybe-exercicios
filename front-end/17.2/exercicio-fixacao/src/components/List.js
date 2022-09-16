import { useContext } from "react"
import { FormContext } from "../context/MyContext"

export default function List() {
    const {state} = useContext(FormContext);
    console.log('stateList:',state)
    return (
        <ul>
            <li>{state.name}</li>
            <li>{state.city}</li>
            <li>{state.age}</li>
            <li>{state.subject}</li>
        </ul>
    )
}