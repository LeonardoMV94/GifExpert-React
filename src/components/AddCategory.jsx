import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <= 1) return       
        // setCategories(old => [...old, inputValue])
        onNewCategory( inputValue.trim() ) // Funcion emitida desde GifExpertApp
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmitForm}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue}
                onChange={onInputChange} />
        </form>
    )
}
