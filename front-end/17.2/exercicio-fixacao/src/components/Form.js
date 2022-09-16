import { useContext, useState } from "react"
import { FormContext } from "../context/MyContext"

export default function Form() {
    const { state, setState } = useContext(FormContext)

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        city: '',
        subject: '',
    })

    const submitClick = () => {
        console.log('stateForm',state, 'formState',formState)
        setState(prevState => ({
            ...prevState,
                name: formState.name,
                age: formState.age,
                city: formState.city,
                subject: formState.subject,
        }))
    }

    const handleChange = ({target : {name, value}}) => {
        setFormState(prevState => ({ ...prevState, [name]: value}))
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Nome Completo"
                name="name"
                value={ formState.name}
                onChange={handleChange}
            />
            <input 
                type="number"
                placeholder="Idade"
                name="age"
                value={formState.age}
                onChange={handleChange}

            />
            <input 
                type="text"
                placeholder="Cidade"
                name="city"
                value={formState.city}
                onChange={handleChange}

            />

            <label htmlFor="fundamentos">Fundamentos</label>
            <input onChange={handleChange} type="radio" name="subject"  value="Fundamentos" id="fundamentos" />

            <label htmlFor="front-end">Front-end</label>
            <input onChange={handleChange} type="radio" name="subject" value="Front-End" id="front-end" />

            <label htmlFor="back-end">Back-end</label>
            <input onChange={handleChange} type="radio" name="subject" value="Back-End" id="back-end" />

            <label htmlFor="ciencia-da-computacao">Ciencia da Computacao</label>
            <input onChange={handleChange} type="radio" name="subject" value="Ciencia da Computacao" id="ciencia-da-computacao" />

            <button type="submit" onClick={ submitClick }>Submit</button>

        </div>
    )
}